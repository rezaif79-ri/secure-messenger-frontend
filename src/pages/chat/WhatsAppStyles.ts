import { css } from '@emotion/react';

// Secure Messenger - Modern Blue Glassmorphism Theme
const colors = {
  primary: 'rgba(59, 130, 246, 1)', // Modern blue
  primaryAlpha: 'rgba(59, 130, 246, 0.1)',
  primaryHover: 'rgba(59, 130, 246, 0.8)',
  primaryLight: 'rgba(96, 165, 250, 1)',
  primaryDark: 'rgba(37, 99, 235, 1)',

  secondary: 'rgba(139, 92, 246, 1)', // Purple accent
  secondaryAlpha: 'rgba(139, 92, 246, 0.1)',

  background: 'rgba(15, 23, 42, 0.95)', // Slate dark background
  surfaceGlass: 'rgba(30, 41, 59, 0.85)', // Glass surface with blue tint
  surfaceHover: 'rgba(51, 65, 85, 0.9)',

  sidebar: 'rgba(30, 41, 59, 0.9)', // Sidebar glass
  sidebarHover: 'rgba(51, 65, 85, 0.95)',

  chatBackground: 'rgba(15, 23, 42, 0.7)', // Chat area background

  text: {
    primary: '#F1F5F9', // Slate white
    secondary: '#94A3B8', // Slate gray
    tertiary: '#64748B', // Muted slate
    accent: '#3B82F6', // Blue accent
    white: '#FFFFFF',
    light: 'rgba(255, 255, 255, 0.9)',
    glow: 'rgba(59, 130, 246, 0.8)',
  },

  message: {
    incoming: 'rgba(30, 41, 59, 0.9)',
    outgoing: 'rgba(59, 130, 246, 0.9)', // Blue for sent messages
    incomingHover: 'rgba(51, 65, 85, 0.95)',
    outgoingHover: 'rgba(37, 99, 235, 0.95)',
  },

  status: {
    online: '#10B981', // Emerald
    away: '#F59E0B', // Amber
    offline: '#6B7280', // Gray
    typing: '#3B82F6', // Blue
    secure: '#059669', // Secure indicator
  },

  border: 'rgba(148, 163, 184, 0.15)',
  borderHover: 'rgba(148, 163, 184, 0.25)',
  borderGlow: 'rgba(59, 130, 246, 0.3)',

  shadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.4)',
    md: '0 4px 12px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.4)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
    blueGlow: '0 0 30px rgba(59, 130, 246, 0.4)',
  }
};

export const whatsappStyles = {
  // Main container with modern blue glassmorphism layout
  container: css`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg,
      rgba(15, 23, 42, 0.98) 0%,
      rgba(30, 58, 138, 0.95) 25%,
      rgba(59, 130, 246, 0.85) 50%,
      rgba(139, 92, 246, 0.9) 75%,
      rgba(15, 23, 42, 0.98) 100%
    );
    backdrop-filter: blur(24px);
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
  `,

  // Left sidebar (contacts list) with enhanced glassmorphism
  sidebar: css`
    width: 380px;
    min-width: 320px;
    background: ${colors.sidebar};
    backdrop-filter: blur(24px);
    border-right: 1px solid ${colors.border};
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 32px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 10;
    border-radius: 0 20px 20px 0;
    margin: 12px 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(145deg,
        rgba(59, 130, 246, 0.04) 0%,
        transparent 50%,
        rgba(139, 92, 246, 0.02) 100%
      );
      pointer-events: none;
      border-radius: 0 20px 20px 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -2px;
      width: 4px;
      height: 100px;
      background: linear-gradient(180deg,
        transparent,
        rgba(59, 130, 246, 0.5),
        transparent
      );
      border-radius: 2px 0 0 2px;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      transform: translateY(-50%);
    }

    @media (max-width: 768px) {
      width: 100%;
      position: absolute;
      left: -100%;
      transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 100;
      border-radius: 0;
      margin: 0;

      &::after {
        display: none;
      }
    }

    &.mobile-open {
      @media (max-width: 768px) {
        left: 0;
      }
    }
  `,

  // Sidebar header
  sidebarHeader: css`
    padding: 16px 20px;
    background: ${colors.surfaceGlass};
    border-bottom: 1px solid ${colors.border};
    backdrop-filter: blur(16px);
    position: sticky;
    top: 0;
    z-index: 20;
  `,

  // User profile section in header
  userProfile: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,

  userInfo: css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    cursor: pointer;
    padding: 8px;
    border-radius: 12px;
    transition: all 0.2s ease;

    &:hover {
      background: ${colors.sidebarHover};
    }
  `,

  userName: css`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.text.primary};
  `,

  userStatus: css`
    font-size: 13px;
    color: ${colors.text.secondary};
  `,

  // Header actions (new chat, menu, etc.)
  headerActions: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  headerButton: css`
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    border-radius: 50%;
    color: ${colors.text.secondary};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: ${colors.surfaceHover};
      color: ${colors.text.primary};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  `,

  // Search bar
  searchContainer: css`
    position: relative;
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
  `,

  searchInput: css`
    width: 100%;
    padding: 12px 16px 12px 48px;
    border: none;
    border-radius: 8px;
    background: ${colors.chatBackground};
    color: ${colors.text.primary};
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;
    box-sizing: border-box;
    max-width: 100%;

    &::placeholder {
      color: ${colors.text.tertiary};
    }

    &:focus {
      background: ${colors.surfaceHover};
      box-shadow: 0 0 0 2px ${colors.primaryAlpha};
    }
  `,

  searchIcon: css`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.text.tertiary};
    pointer-events: none;

    svg {
      width: 16px;
      height: 16px;
    }
  `,

  // Filter tabs (All, Unread, Groups, etc.)
  filterTabs: css`
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
  `,

  filterTab: css`
    padding: 6px 12px;
    border: none;
    border-radius: 16px;
    background: transparent;
    color: ${colors.text.secondary};
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${colors.primaryAlpha};
      color: ${colors.text.primary};
    }

    &.active {
      background: ${colors.primary};
      color: white;
    }
  `,

  // Contacts list
  contactsList: css`
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${colors.border} transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.border};
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${colors.borderHover};
    }
  `,

  // Individual contact item
  contactItem: css`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    border-bottom: 1px solid ${colors.border};
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      background: ${colors.sidebarHover};
    }

    &.active {
      background: ${colors.primaryAlpha};
      border-left: 3px solid ${colors.primary};
    }

    &.unread {
      background: rgba(0, 168, 132, 0.05);
    }
  `,

  contactAvatar: css`
    position: relative;
    margin-right: 12px;
  `,

  avatar: css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${colors.border};
  `,

  onlineIndicator: css`
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    background: ${colors.status.online};
    border: 2px solid ${colors.surfaceGlass};
    border-radius: 50%;
  `,

  contactContent: css`
    flex: 1;
    min-width: 0;
  `,

  contactHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
  `,

  contactName: css`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.text.primary};
    margin: 0;
  `,

  contactTime: css`
    font-size: 12px;
    color: ${colors.text.tertiary};
  `,

  lastMessage: css`
    font-size: 14px;
    color: ${colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    gap: 4px;
  `,

  messageStatus: css`
    svg {
      width: 16px;
      height: 16px;
      color: ${colors.text.tertiary};

      &.delivered {
        color: ${colors.text.secondary};
      }

      &.read {
        color: ${colors.primary};
      }
    }
  `,

  unreadBadge: css`
    position: absolute;
    top: 60%;
    right: 5%;
    background: ${colors.primary};
    color: white;
    border-radius: 10px;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `,

  pinnedIndicator: css`
    color: ${colors.text.tertiary};
    margin-left: 4px;

    svg {
      width: 12px;
      height: 12px;
    }
  `,

  // Main chat area with enhanced glassmorphism
  chatArea: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${colors.chatBackground};
    position: relative;
    border-radius: 20px 20px 0 0;
    margin: 12px 12px 0 0;
    backdrop-filter: blur(24px);
    overflow: hidden;
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.25),
      0 0 40px rgba(59, 130, 246, 0.05);
    border: 1px solid ${colors.border};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(145deg,
        rgba(59, 130, 246, 0.03) 0%,
        transparent 50%,
        rgba(139, 92, 246, 0.02) 100%
      );
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -2px;
      width: 4px;
      height: 120px;
      background: linear-gradient(180deg,
        transparent,
        rgba(59, 130, 246, 0.4),
        transparent
      );
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      transform: translateY(-50%);
    }

    @media (max-width: 768px) {
      margin: 0;
      border-radius: 0;

      &::after {
        display: none;
      }
    }
  `,

  // Chat header with enhanced styling
  chatHeader: css`
    display: flex;
    align-items: center;
    padding: 24px 28px;
    background: ${colors.surfaceGlass};
    backdrop-filter: blur(24px);
    border-bottom: 1px solid ${colors.border};
    box-shadow: ${colors.shadow.sm};
    z-index: 10;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 28px;
      right: 28px;
      height: 1px;
      background: linear-gradient(90deg,
        transparent,
        ${colors.borderGlow},
        transparent
      );
    }
  `,

  chatHeaderContent: css`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 20px;
    cursor: pointer;
    padding: 12px;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: rgba(59, 130, 246, 0.08);
      transform: scale(1.02);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
    }
  `,

  chatTitle: css`
    font-size: 19px;
    font-weight: 700;
    color: ${colors.text.primary};
    margin: 0;
    text-shadow: 0 0 15px rgba(241, 245, 249, 0.2);
    background: linear-gradient(135deg, ${colors.text.primary}, ${colors.text.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `,

  chatSubtitle: css`
    font-size: 14px;
    color: ${colors.text.secondary};
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  typingIndicator: css`
    color: ${colors.status.typing};
    font-style: italic;
    display: flex;
    align-items: center;
    gap: 4px;

    .dots {
      display: flex;
      gap: 2px;
    }

    .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${colors.status.typing};
      animation: typing 1.4s infinite ease-in-out;
    }

    .dot:nth-child(1) { animation-delay: -0.32s; }
    .dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes typing {
      0%, 80%, 100% { opacity: 0.3; }
      40% { opacity: 1; }
    }
  `,

  chatHeaderActions: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  // Messages container
  messagesContainer: css`
    flex: 1;
    overflow-y: auto;
    padding: 20px 0;
    background: linear-gradient(135deg,
      ${colors.chatBackground} 0%,
      rgba(15, 23, 42, 0.4) 100%
    );
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.2) transparent;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 40%),
        radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 40%);
      pointer-events: none;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(59, 130, 246, 0.2);
      border-radius: 4px;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(59, 130, 246, 0.3);
      }
    }
  `,

  // Message bubbles
  messageGroup: css`
    margin-bottom: 16px;
    padding: 0 20px;
  `,

  dateLabel: css`
    text-align: center;
    margin: 20px 0;

    span {
      background: ${colors.surfaceGlass};
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      color: ${colors.text.secondary};
      backdrop-filter: blur(8px);
    }
  `,

  message: css`
    display: flex;
    margin-bottom: 8px;
    align-items: flex-end;
    gap: 8px;

    &.outgoing {
      flex-direction: row-reverse;
    }
  `,

  messageBubble: css`
    max-width: 65%;
    padding: 8px 12px;
    border-radius: 18px;
    backdrop-filter: blur(16px);
    position: relative;
    word-wrap: break-word;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(148, 163, 184, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(145deg,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 100%
      );
      pointer-events: none;
      border-radius: inherit;
    }

    &.incoming {
      background: ${colors.message.incoming};
      color: ${colors.text.primary};
      border-bottom-left-radius: 6px;

      &:hover {
        transform: translateX(-2px);
        box-shadow:
          0 8px 25px rgba(0, 0, 0, 0.15),
          -4px 0 15px rgba(59, 130, 246, 0.1);
      }
    }

    &.outgoing {
      background: ${colors.message.outgoing};
      color: ${colors.text.white};
      border-bottom-right-radius: 6px;
      margin-left: auto;
      box-shadow:
        0 4px 15px rgba(59, 130, 246, 0.2),
        0 0 30px rgba(59, 130, 246, 0.05);

      &:hover {
        transform: translateX(2px);
        box-shadow:
          0 8px 25px rgba(59, 130, 246, 0.25),
          4px 0 15px rgba(59, 130, 246, 0.1);
      }
    }
  `,

  messageText: css`
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
    position: relative;
    z-index: 1;
  `,

  messageFooter: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    margin-top: 6px;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.7);
    position: relative;
    z-index: 1;
  `,

  messageTime: css`
    font-size: 11px;
    opacity: 0.8;
    font-weight: 500;
  `,

  // Message input area
  messageInputContainer: css`
    padding: 20px 24px;
    background: ${colors.surfaceGlass};
    backdrop-filter: blur(20px);
    border-top: 1px solid ${colors.border};
    display: flex;
    align-items: flex-end;
    gap: 12px;
    position: relative;
    width: 100%;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 24px;
      right: 24px;
      height: 1px;
      background: linear-gradient(90deg,
        transparent,
        ${colors.borderGlow},
        transparent
      );
    }
  `,

  attachButton: css`
    width: 44px;
    height: 44px;
    border: none;
    background: rgba(59, 130, 246, 0.1);
    color: ${colors.text.secondary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(59, 130, 246, 0.15);
    flex-shrink: 0;

    &:hover {
      background: rgba(59, 130, 246, 0.2);
      color: #60A5FA;
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
    }

    svg {
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
    }
  `,

  messageInputWrapper: css`
    flex: 1;
    position: relative;
    min-width: 0;
    margin-right: 8px;
  `,

  messageInput: css`
    width: 100%;
    min-height: 44px;
    max-height: 120px;
    padding: 12px 50px 12px 20px;
    border: none;
    border-radius: 22px;
    background: ${colors.chatBackground};
    color: ${colors.text.primary};
    font-size: 15px;
    line-height: 1.5;
    resize: none;
    outline: none;
    font-family: inherit;
    overflow-y: auto;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(59, 130, 246, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    &::placeholder {
      color: ${colors.text.tertiary};
    }

    &:focus {
      background: ${colors.surfaceHover};
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow:
        0 0 0 3px rgba(59, 130, 246, 0.1),
        0 4px 15px rgba(0, 0, 0, 0.15);
    }
  `,

  emojiButton: css`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    color: ${colors.text.secondary};
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #60A5FA;
      background: rgba(59, 130, 246, 0.1);
      transform: translateY(-50%) scale(1.1);
    }

    svg {
      width: 18px;
      height: 18px;
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.2));
    }
  `,

  sendButton: css`
    width: 44px;
    height: 44px;
    border: none;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark});
    color: white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow:
      0 4px 15px rgba(59, 130, 246, 0.4),
      0 0 30px rgba(59, 130, 246, 0.2);
    position: relative;
    overflow: hidden;
    flex-shrink: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover {
      background: linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary});
      transform: scale(1.1);
      box-shadow:
        0 6px 20px rgba(59, 130, 246, 0.5),
        0 0 40px rgba(59, 130, 246, 0.3);

      &::before {
        left: 100%;
      }
    }

    &:disabled {
      background: ${colors.text.tertiary};
      cursor: not-allowed;
      transform: none;
      box-shadow: none;

      &::before {
        display: none;
      }
    }

    svg {
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
    }
  `,

  // Empty state
  emptyState: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${colors.text.secondary};
    text-align: center;
    padding: 40px;

    .icon {
      width: 120px;
      height: 120px;
      margin-bottom: 24px;
      opacity: 0.3;
    }

    h3 {
      font-size: 24px;
      font-weight: 300;
      margin-bottom: 12px;
      color: ${colors.text.primary};
    }

    p {
      font-size: 14px;
      opacity: 0.8;
      max-width: 400px;
    }
  `,

  // Contact info panel (right sidebar)
  contactInfoPanel: css`
    width: 280px;
    background: ${colors.sidebar};
    backdrop-filter: blur(20px);
    border-left: 1px solid ${colors.border};
    display: flex;
    flex-direction: column;
    box-shadow: ${colors.shadow.md};
    transition: all 0.3s ease;

    @media (max-width: 1024px) {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      z-index: 50;
      transform: translateX(100%);
      visibility: hidden;
      opacity: 0;
    }

    @media (min-width: 1025px) {
      display: none;
    }
  `,

  contactInfoPanelOpen: css`
    @media (max-width: 1024px) {
      transform: translateX(0) !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    @media (min-width: 1025px) {
      display: flex !important;
    }
  `,

  contactInfoHeader: css`
    padding: 20px;
    background: ${colors.surfaceGlass};
    border-bottom: 1px solid ${colors.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  closeButton: css`
    width: 36px;
    height: 36px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.text.secondary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: ${colors.text.primary};
      transform: scale(1.05);
      border-color: rgba(255, 255, 255, 0.2);
    }

    &:active {
      transform: scale(0.95);
    }
  `,

  // Mobile overlay
  mobileOverlay: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 90;

    @media (min-width: 769px) {
      display: none;
    }
  `,

  // Responsive utilities
  mobileOnly: css`
    @media (min-width: 769px) {
      display: none !important;
    }
  `,

  desktopOnly: css`
    @media (max-width: 768px) {
      display: none !important;
    }
  `,
};
