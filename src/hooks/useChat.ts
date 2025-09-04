import { useState, useCallback, useMemo } from 'react';
import type { ChatMessage } from '../pages/chat/Types';
import { useLocalStorage } from './useLocalStorage';
import { generateId } from '../utils/helpers';

// Mock messages data
const initialMessages: ChatMessage[] = [
  {
    id: '1',
    from: 'Diana Jenkins',
    to: 'me',
    text: 'Hello!',
    timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    status: 'read',
    type: 'text',
  },
  {
    id: '2',
    from: 'Diana Jenkins',
    to: 'me',
    text: 'Do you have cafes in London?',
    timestamp: new Date(Date.now() - 1000 * 60 * 9), // 9 minutes ago
    status: 'read',
    type: 'text',
  },
  {
    id: '3',
    from: 'me',
    to: 'Diana Jenkins',
    text: 'Hello, sure - we have two places in London City',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    status: 'delivered',
    type: 'text',
  },
];

export const useChat = (contactId?: string | null) => {
  const [messages, setMessages] = useLocalStorage<ChatMessage[]>('secure-messenger-messages', initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);

  // Get messages for current conversation
  const conversationMessages = useMemo(() => {
    if (!contactId) return [];

    return messages
      .filter(msg =>
        (msg.from === 'me' && msg.to === contactId) ||
        (msg.from === contactId && msg.to === 'me')
      )
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }, [messages, contactId]);

  // Send a new message
  const sendMessage = useCallback((text: string, type: 'text' | 'image' | 'file' | 'audio' = 'text', fileData?: { url: string; name: string; size: number }) => {
    if (!contactId || !text.trim()) return;

    const message: ChatMessage = {
      id: generateId(),
      from: 'me',
      to: contactId,
      text: text.trim(),
      timestamp: new Date(),
      status: 'sending',
      type,
      fileUrl: fileData?.url,
      fileName: fileData?.name,
      fileSize: fileData?.size,
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate message being sent and delivered
    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === message.id ? { ...msg, status: 'sent' } : msg
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === message.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 2000);

    return message;
  }, [contactId, setMessages]);

  // Mark messages as read
  const markAsRead = useCallback((messageIds: string[]) => {
    setMessages(prev =>
      prev.map(msg =>
        messageIds.includes(msg.id) ? { ...msg, status: 'read' } : msg
      )
    );
  }, [setMessages]);

  // Mark all messages in conversation as read
  const markConversationAsRead = useCallback(() => {
    if (!contactId) return;

    const unreadMessageIds = conversationMessages
      .filter(msg => msg.from !== 'me' && msg.status !== 'read')
      .map(msg => msg.id);

    if (unreadMessageIds.length > 0) {
      markAsRead(unreadMessageIds);
    }
  }, [contactId, conversationMessages, markAsRead]);

  // Get unread count for a contact
  const getUnreadCount = useCallback((contactIdToCheck: string) => {
    return messages.filter(msg =>
      msg.from === contactIdToCheck &&
      msg.to === 'me' &&
      msg.status !== 'read'
    ).length;
  }, [messages]);

  // Delete a message
  const deleteMessage = useCallback((messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  }, [setMessages]);

  // Update typing status
  const updateTypingStatus = useCallback((typing: boolean) => {
    setIsTyping(typing);

    // Auto-clear typing after 3 seconds
    if (typing) {
      setTimeout(() => setIsTyping(false), 3000);
    }
  }, []);

  // Add typing user
  const addTypingUser = useCallback((userId: string) => {
    setTypingUsers(prev => {
      if (!prev.includes(userId)) {
        return [...prev, userId];
      }
      return prev;
    });

    // Remove typing user after 3 seconds
    setTimeout(() => {
      setTypingUsers(prev => prev.filter(id => id !== userId));
    }, 3000);
  }, []);

  // Search messages
  const searchMessages = useCallback((query: string) => {
    if (!query.trim()) return [];

    return messages.filter(msg =>
      msg.text.toLowerCase().includes(query.toLowerCase())
    );
  }, [messages]);

  // Get last message for a contact
  const getLastMessage = useCallback((contactIdToCheck: string) => {
    const contactMessages = messages.filter(msg =>
      (msg.from === 'me' && msg.to === contactIdToCheck) ||
      (msg.from === contactIdToCheck && msg.to === 'me')
    );

    return contactMessages.sort((a, b) =>
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0] || null;
  }, [messages]);

  return {
    messages: conversationMessages,
    allMessages: messages,
    newMessage,
    setNewMessage,
    isTyping,
    typingUsers,
    sendMessage,
    markAsRead,
    markConversationAsRead,
    getUnreadCount,
    deleteMessage,
    updateTypingStatus,
    addTypingUser,
    searchMessages,
    getLastMessage,
  };
};
