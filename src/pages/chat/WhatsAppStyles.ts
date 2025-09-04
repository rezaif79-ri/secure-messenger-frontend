import { css } from '@emotion/react';

// WhatsApp Desktop-like Glassmorphism Theme
const colors = {
  primary: 'rgba(0, 168, 132, 1)', // WhatsApp green
  primaryAlpha: 'rgba(0, 168, 132, 0.1)',
  primaryHover: 'rgba(0, 168, 132, 0.8)',

  background: 'rgba(17, 27, 33, 0.95)', // Dark teal background
  surfaceGlass: 'rgba(32, 44, 51, 0.85)', // Glass surface
  surfaceHover: 'rgba(45, 55, 62, 0.9)',

  sidebar: 'rgba(42, 58, 65, 0.9)', // Sidebar glass
  sidebarHover: 'rgba(52, 68, 75, 0.95)',

  chatBackground: 'rgba(18, 30, 40, 0.7)', // Chat area background

  text: {
    primary: '#E9EDEF', // Main text
    secondary: '#8696A0', // Secondary text
    tertiary: '#667781', // Muted text
    accent: '#00A884', // Green accent
    white: '#FFFFFF',
    light: 'rgba(255, 255, 255, 0.8)',
  },

  message: {
    incoming: 'rgba(42, 58, 65, 0.85)',
    outgoing: 'rgba(0, 95, 77, 0.85)', // Dark green for sent messages
    incomingHover: 'rgba(52, 68, 75, 0.9)',
    outgoingHover: 'rgba(0, 105, 87, 0.9)',
  },

  status: {
    online: '#00D448',
    away: '#F39C12',
    offline: '#95A5A6',
    typing: '#00A884',
  },

  border: 'rgba(134, 150, 160, 0.15)',
  borderHover: 'rgba(134, 150, 160, 0.25)',

  shadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.25)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.35)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.4)',
  }
};

export const whatsappStyles = {
  // Main container with WhatsApp desktop layout
  container: css`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg,
      rgba(17, 27, 33, 0.95) 0%,
      rgba(42, 58, 65, 0.9) 50%,
      rgba(32, 44, 51, 0.95) 100%
    );
    backdrop-filter: blur(20px);
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  `,

  // Left sidebar (contacts list)
  sidebar: css`
    width: 350px;
    min-width: 280px;
    background: ${colors.sidebar};
    backdrop-filter: blur(20px);
    border-right: 1px solid ${colors.border};
    display: flex;
    flex-direction: column;
    box-shadow: ${colors.shadow.md};
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
      width: 100%;
      position: absolute;
      left: -100%;
      transition: left 0.3s ease;
      z-index: 100;
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
    top: 12px;
    right: 20px;
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
  `,

  pinnedIndicator: css`
    color: ${colors.text.tertiary};
    margin-left: 4px;

    svg {
      width: 12px;
      height: 12px;
    }
  `,

  // Main chat area
  chatArea: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${colors.chatBackground};
    position: relative;
  `,

  // Chat header
  chatHeader: css`
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background: ${colors.surfaceGlass};
    backdrop-filter: blur(16px);
    border-bottom: 1px solid ${colors.border};
    box-shadow: ${colors.shadow.sm};
    z-index: 10;
  `,

  chatHeaderContent: css`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 12px;
  `,

  chatTitle: css`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.text.primary};
    margin: 0;
  `,

  chatSubtitle: css`
    font-size: 13px;
    color: ${colors.text.secondary};
    margin: 0;
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
    padding: 16px 0;
    background: linear-gradient(135deg,
      ${colors.chatBackground} 0%,
      rgba(18, 30, 40, 0.5) 100%
    );
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

    &.incoming {
      background: ${colors.message.incoming};
      color: ${colors.text.primary};
      border-bottom-left-radius: 4px;
    }

    &.outgoing {
      background: ${colors.message.outgoing};
      color: ${colors.text.white};
      border-bottom-right-radius: 4px;
      margin-left: auto;
    }
  `,

  messageText: css`
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
  `,

  messageFooter: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    margin-top: 4px;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
  `,

  messageTime: css`
    font-size: 11px;
    opacity: 0.7;
  `,

  // Message input area
  messageInputContainer: css`
    padding: 16px 20px;
    background: ${colors.surfaceGlass};
    backdrop-filter: blur(16px);
    border-top: 1px solid ${colors.border};
    display: flex;
    align-items: flex-end;
    gap: 12px;
  `,

  attachButton: css`
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    color: ${colors.text.secondary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: ${colors.surfaceHover};
      color: ${colors.text.primary};
    }
  `,

  messageInputWrapper: css`
    flex: 1;
    position: relative;
  `,

  messageInput: css`
    width: 100%;
    min-height: 40px;
    max-height: 120px;
    padding: 10px 16px;
    border: none;
    border-radius: 20px;
    background: ${colors.chatBackground};
    color: ${colors.text.primary};
    font-size: 14px;
    line-height: 1.4;
    resize: none;
    outline: none;
    font-family: inherit;
    overflow-y: auto;

    &::placeholder {
      color: ${colors.text.tertiary};
    }

    &:focus {
      background: ${colors.surfaceHover};
      box-shadow: 0 0 0 2px ${colors.primaryAlpha};
    }
  `,

  emojiButton: css`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    color: ${colors.text.secondary};
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      color: ${colors.text.primary};
    }
  `,

  sendButton: css`
    width: 40px;
    height: 40px;
    border: none;
    background: ${colors.primary};
    color: white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    box-shadow: ${colors.shadow.sm};

    &:hover {
      background: ${colors.primaryHover};
      transform: scale(1.05);
    }

    &:disabled {
      background: ${colors.text.tertiary};
      cursor: not-allowed;
      transform: none;
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
    transition: transform 0.3s ease;

    @media (max-width: 1024px) {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      z-index: 50;
      transform: translateX(100%);
    }

    &.panel-open {
      @media (max-width: 1024px) {
        transform: translateX(0);
      }
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
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    color: ${colors.text.secondary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: ${colors.surfaceHover};
      color: ${colors.text.primary};
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
