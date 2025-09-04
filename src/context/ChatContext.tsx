import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useContacts } from '../hooks/useContacts';
import { useChat } from '../hooks/useChat';
import type { Contact } from '../pages/chat/Types';

interface ChatContextType {
  // Contact management
  contacts: Contact[];
  filteredContacts: Contact[];
  favoriteContacts: Contact[];
  onlineContacts: Contact[];
  contactRequests: any[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact | null) => void;
  addContact: (contactData: Omit<Contact, 'id'>) => Contact;
  updateContact: (id: number, updates: Partial<Contact>) => void;
  deleteContact: (id: number) => void;
  toggleFavorite: (id: number) => void;
  toggleBlock: (id: number) => void;
  sendContactRequest: (emailOrUsername: string, message?: string) => Promise<{ success: boolean; message: string }>;
  acceptContactRequest: (requestId: number) => void;
  declineContactRequest: (requestId: number) => void;
  updateOnlineStatus: (id: number, online: boolean) => void;
  updateTypingStatus: (id: number, isTyping: boolean) => void;

  // Chat functionality
  messages: any[];
  allMessages: any[];
  newMessage: string;
  setNewMessage: (message: string) => void;
  isTyping: boolean;
  typingUsers: string[];
  sendMessage: (text: string, type?: 'text' | 'image' | 'file' | 'audio', fileData?: { url: string; name: string; size: number }) => any;
  markAsRead: (messageIds: string[]) => void;
  markConversationAsRead: () => void;
  getUnreadCount: (contactId: string) => number;
  deleteMessage: (messageId: string) => void;
  updateMessageTypingStatus: (typing: boolean) => void;
  addTypingUser: (userId: string) => void;
  searchMessages: (query: string) => any[];
  getLastMessage: (contactId: string) => any;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const contactsHook = useContacts();
  const chatHook = useChat(contactsHook.selectedContact?.id);

  const value: ChatContextType = {
    // Contact management
    ...contactsHook,

    // Chat functionality (exclude conflicting updateTypingStatus)
    messages: chatHook.messages,
    allMessages: chatHook.allMessages,
    newMessage: chatHook.newMessage,
    setNewMessage: chatHook.setNewMessage,
    isTyping: chatHook.isTyping,
    typingUsers: chatHook.typingUsers,
    sendMessage: chatHook.sendMessage,
    markAsRead: chatHook.markAsRead,
    markConversationAsRead: chatHook.markConversationAsRead,
    getUnreadCount: chatHook.getUnreadCount,
    deleteMessage: chatHook.deleteMessage,
    updateMessageTypingStatus: chatHook.updateTypingStatus,
    addTypingUser: chatHook.addTypingUser,
    searchMessages: chatHook.searchMessages,
    getLastMessage: chatHook.getLastMessage,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
