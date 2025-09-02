export interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime?: Date;
  online: boolean;
  lastSeen?: Date;
  isTyping?: boolean;
  isFavorite?: boolean;
  isBlocked?: boolean;
  info: {
    whatsapp: string;
    group: string;
    email?: string;
    phone?: string;
  };
}

export interface ChatMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  type: 'text' | 'image' | 'file' | 'audio';
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  replyTo?: string; // ID of the message being replied to
}

export interface ChatCard {
  title: string;
  desc: string;
  img: string;
  url?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  avatar: string;
  online: boolean;
  lastSeen?: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  showOnlineStatus: boolean;
  allowMessagePreview: boolean;
  soundEnabled: boolean;
  darkMode: boolean;
  language: string;
  autoDownloadMedia: boolean;
}

export interface ContactRequest {
  id: number;
  name: string;
  avatar: string;
  email: string;
  username?: string;
  message?: string;
  timestamp: Date;
}

export interface ChatRoom {
  id: string;
  participants: string[];
  lastMessage?: ChatMessage;
  unreadCount: number;
  isGroup: boolean;
  name?: string; // for group chats
  avatar?: string; // for group chats
  createdAt: Date;
  updatedAt: Date;
}

export type NavigationPage = 'chat' | 'addContact' | 'settings';

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export type MessageType = 'text' | 'image' | 'file' | 'audio';

export interface TypingIndicator {
  userId: string;
  isTyping: boolean;
  timestamp: Date;
}
