export interface Contact {
  id: string;
  name: string;
  avatar?: string;
  lastMessage?: string;
  lastMessageTime?: Date;
  online: boolean;
  lastSeen?: Date;
  isTyping?: boolean;
  isFavorite?: boolean;
  isBlocked?: boolean;
  unreadCount?: number;
  isPinned?: boolean;
  isArchived?: boolean;
  isMuted?: boolean;
  info: {
    phone: string;
    about?: string;
    email?: string;
    groups?: string[];
  };
}

export interface ChatMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  type: 'text' | 'image' | 'file' | 'audio' | 'video' | 'sticker' | 'location' | 'contact';
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  replyTo?: string;
  reactions?: MessageReaction[];
  isForwarded?: boolean;
  isStarred?: boolean;
  isDeleted?: boolean;
  editedAt?: Date;
}

export interface MessageReaction {
  emoji: string;
  userId: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  contactId: string;
  messages: ChatMessage[];
  lastActivity: Date;
  unreadCount: number;
  isPinned: boolean;
  isArchived: boolean;
  isMuted: boolean;
  draftMessage?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  about?: string;
  online: boolean;
  lastSeen?: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: {
    enabled: boolean;
    sound: boolean;
    desktop: boolean;
    preview: boolean;
  };
  privacy: {
    lastSeen: 'everyone' | 'contacts' | 'nobody';
    profilePhoto: 'everyone' | 'contacts' | 'nobody';
    about: 'everyone' | 'contacts' | 'nobody';
    readReceipts: boolean;
    groups: 'everyone' | 'contacts';
  };
  chat: {
    enterToSend: boolean;
    mediaAutoDownload: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
}

export interface ContactRequest {
  id: string;
  name: string;
  avatar?: string;
  phone: string;
  message?: string;
  timestamp: Date;
  status: 'pending' | 'accepted' | 'declined';
}

export interface ChatState {
  conversations: Conversation[];
  selectedConversationId?: string;
  searchQuery: string;
  archivedChats: string[];
  starredMessages: string[];
}

// Navigation types
export interface NavigationState {
  activeSection: 'chats' | 'contacts' | 'settings' | 'archived' | 'starred';
  showProfile: boolean;
  showNewChat: boolean;
  showGroupInfo: boolean;
}

// UI State types
export interface UIState {
  sidebarCollapsed: boolean;
  showContactInfo: boolean;
  showEmojiPicker: boolean;
  showAttachmentMenu: boolean;
  isTyping: boolean;
  selectedMessages: string[];
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
