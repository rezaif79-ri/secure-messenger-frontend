/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import {
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiIcon,
  Phone as PhoneIcon,
  VideoCall as VideoCallIcon,
  Info as InfoIcon,
  ArrowBack as ArrowBackIcon,
  PushPin as PinIcon,
  Check as CheckIcon,
  DoneAll as DoneAllIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { whatsappStyles } from './WhatsAppStyles';
import type { Contact, ChatMessage } from './Types';
import { formatMessageTime, formatLastSeen } from '../../utils/dateUtils';
import { ChatProvider } from '../../context/ChatContext';

// Mock data for demonstration
const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Hey! How are you doing today?',
    lastMessageTime: new Date(Date.now() - 300000), // 5 minutes ago
    online: true,
    unreadCount: 2,
    isPinned: true,
    info: {
      phone: '+1 234 567 8900',
      about: 'Busy living life! 🌟',
    }
  },
  {
    id: '2',
    name: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Thanks for your help yesterday',
    lastMessageTime: new Date(Date.now() - 3600000), // 1 hour ago
    online: false,
    lastSeen: new Date(Date.now() - 1800000), // 30 minutes ago
    unreadCount: 0,
    info: {
      phone: '+1 234 567 8901',
      about: 'Software Developer at TechCorp',
    }
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Let\'s meet tomorrow at 3 PM',
    lastMessageTime: new Date(Date.now() - 7200000), // 2 hours ago
    online: true,
    isTyping: false,
    unreadCount: 1,
    info: {
      phone: '+1 234 567 8902',
      about: 'Travel enthusiast ✈️',
    }
  },
  {
    id: '4',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    lastMessage: 'Great presentation today!',
    lastMessageTime: new Date(Date.now() - 86400000), // 1 day ago
    online: false,
    lastSeen: new Date(Date.now() - 43200000), // 12 hours ago
    unreadCount: 0,
    info: {
      phone: '+1 234 567 8903',
      about: 'Designer & Creative Director',
    }
  }
];

const mockMessages: ChatMessage[] = [
  {
    id: '1',
    from: '1',
    to: 'me',
    text: 'Hey! How are you doing today?',
    timestamp: new Date(Date.now() - 300000),
    status: 'read',
    type: 'text'
  },
  {
    id: '2',
    from: 'me',
    to: '1',
    text: 'I\'m doing great! Just working on some new projects. How about you?',
    timestamp: new Date(Date.now() - 240000),
    status: 'delivered',
    type: 'text'
  },
  {
    id: '3',
    from: '1',
    to: 'me',
    text: 'That sounds exciting! I\'d love to hear more about it sometime.',
    timestamp: new Date(Date.now() - 120000),
    status: 'read',
    type: 'text'
  }
];

const ContactAvatar: React.FC<{ contact: Contact; size?: 'small' | 'medium' | 'large' }> = ({
  contact,
  size = 'medium'
}) => {
  const sizeMap = { small: 32, medium: 48, large: 64 };
  const avatarSize = sizeMap[size];

  return (
    <div css={whatsappStyles.contactAvatar}>
      <img
        css={[whatsappStyles.avatar, { width: avatarSize, height: avatarSize }]}
        src={contact.avatar || `https://ui-avatars.com/api/?name=${contact.name}&background=00a884&color=ffffff`}
        alt={contact.name}
      />
      {contact.online && <div css={whatsappStyles.onlineIndicator} />}
    </div>
  );
};

const ContactListItem: React.FC<{
  contact: Contact;
  isSelected: boolean;
  onClick: () => void;
}> = ({ contact, isSelected, onClick }) => {
  const renderMessageStatus = () => {
    // This would normally check if the last message was from current user
    const isFromMe = false; // Mock data
    if (!isFromMe) return null;

    return (
      <span css={whatsappStyles.messageStatus}>
        <DoneAllIcon className="read" />
      </span>
    );
  };

  return (
    <div
      css={[
        whatsappStyles.contactItem,
        isSelected && 'active',
        contact.unreadCount && contact.unreadCount > 0 && 'unread'
      ]}
      onClick={onClick}
    >
      <ContactAvatar contact={contact} />

      <div css={whatsappStyles.contactContent}>
        <div css={whatsappStyles.contactHeader}>
          <h3 css={whatsappStyles.contactName}>
            {contact.name}
            {contact.isPinned && (
              <span css={whatsappStyles.pinnedIndicator}>
                <PinIcon />
              </span>
            )}
          </h3>
          <span css={whatsappStyles.contactTime}>
            {contact.lastMessageTime && formatMessageTime(contact.lastMessageTime)}
          </span>
        </div>

        <div css={whatsappStyles.lastMessage}>
          {renderMessageStatus()}
          <span>
            {contact.isTyping ? (
              <span css={whatsappStyles.typingIndicator}>
                typing...
                <div className="dots">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </span>
            ) : (
              contact.lastMessage
            )}
          </span>
        </div>
      </div>

      {contact.unreadCount && contact.unreadCount >= 1 ? (
        <div css={whatsappStyles.unreadBadge}>
          {contact.unreadCount > 99 ? '99+' : contact.unreadCount}
        </div>
      ) : null}
    </div>
  );
};

const MessageBubble: React.FC<{
  message: ChatMessage;
  isFromCurrentUser: boolean;
}> = ({ message, isFromCurrentUser }) => {
  const renderMessageStatus = () => {
    if (!isFromCurrentUser) return null;

    const statusIcons = {
      sending: <CheckIcon />,
      sent: <CheckIcon />,
      delivered: <DoneAllIcon />,
      read: <DoneAllIcon className="read" />
    };

    return statusIcons[message.status];
  };

  return (
    <div css={[whatsappStyles.message, isFromCurrentUser && 'outgoing']}>
      <div css={[
        whatsappStyles.messageBubble,
        isFromCurrentUser ? 'outgoing' : 'incoming'
      ]}>
        <p css={whatsappStyles.messageText}>{message.text}</p>
        <div css={whatsappStyles.messageFooter}>
          <span css={whatsappStyles.messageTime}>
            {formatMessageTime(message.timestamp)}
          </span>
          {renderMessageStatus()}
        </div>
      </div>
    </div>
  );
};

const ChatArea: React.FC<{
  selectedContact: Contact | null;
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  onToggleContactInfo: () => void;
  onBack: () => void;
  showBackButton?: boolean;
}> = ({
  selectedContact,
  messages,
  onSendMessage,
  onToggleContactInfo,
  onBack,
  showBackButton = false
}) => {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      onSendMessage(messageText.trim());
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedContact) {
    return (
      <div css={whatsappStyles.chatArea}>
        <div css={whatsappStyles.emptyState}>
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.28 0-2.56-.3-3.75-.86L4 20l.86-4.25C4.3 14.56 4 13.28 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            <circle cx="9" cy="12" r="1"/>
            <circle cx="12" cy="12" r="1"/>
            <circle cx="15" cy="12" r="1"/>
          </svg>
          <h3>WhatsApp Web</h3>
          <p>
            Send and receive messages without keeping your phone online.<br/>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div css={whatsappStyles.chatArea}>
      {/* Chat Header */}
      <div css={whatsappStyles.chatHeader}>
        {showBackButton && (
          <button css={whatsappStyles.headerButton} onClick={onBack}>
            <ArrowBackIcon />
          </button>
        )}

        <div css={whatsappStyles.chatHeaderContent} onClick={onToggleContactInfo}>
          <ContactAvatar contact={selectedContact} />
          <div>
            <h2 css={whatsappStyles.chatTitle}>{selectedContact.name}</h2>
            <p css={whatsappStyles.chatSubtitle}>
              {selectedContact.isTyping ? (
                <span css={whatsappStyles.typingIndicator}>
                  typing...
                  <div className="dots">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                  </div>
                </span>
              ) : selectedContact.online ? (
                'online'
              ) : selectedContact.lastSeen ? (
                `last seen ${formatLastSeen(selectedContact.lastSeen)}`
              ) : (
                'offline'
              )}
            </p>
          </div>
        </div>

        <div css={whatsappStyles.chatHeaderActions}>
          <button css={whatsappStyles.headerButton}>
            <PhoneIcon />
          </button>
          <button css={whatsappStyles.headerButton}>
            <VideoCallIcon />
          </button>
          <button css={whatsappStyles.headerButton} onClick={onToggleContactInfo}>
            <InfoIcon />
          </button>
          <button css={whatsappStyles.headerButton}>
            <MoreVertIcon />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div css={whatsappStyles.messagesContainer}>
        <div css={whatsappStyles.dateLabel}>
          <span>Today</span>
        </div>

        <div css={whatsappStyles.messageGroup}>
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isFromCurrentUser={message.from === 'me'}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div css={whatsappStyles.messageInputContainer}>
        <button css={whatsappStyles.attachButton}>
          <AttachFileIcon />
        </button>

        <div css={whatsappStyles.messageInputWrapper}>
          <textarea
            css={whatsappStyles.messageInput}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            rows={1}
          />
          <button css={whatsappStyles.emojiButton}>
            <EmojiIcon />
          </button>
        </div>

        <button
          css={whatsappStyles.sendButton}
          onClick={handleSendMessage}
          disabled={!messageText.trim()}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

const ContactInfoPanel: React.FC<{
  contact: Contact | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ contact, isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isOpen, onClose]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!contact) return null;

  return (
    <div
      css={[
        whatsappStyles.contactInfoPanel,
        isOpen && whatsappStyles.contactInfoPanelOpen
      ]}
      ref={panelRef}
    >
      <div css={whatsappStyles.contactInfoHeader}>
        <h3>Contact Info</h3>
        <button
          css={whatsappStyles.closeButton}
          onClick={onClose}
          title="Close contact info"
          aria-label="Close contact info"
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <ContactAvatar contact={contact} size="large" />
          <h2 style={{ margin: '12px 0 4px', color: '#E9EDEF' }}>
            {contact.name}
          </h2>
          <p style={{ color: '#8696A0', margin: 0 }}>
            {contact.info.phone}
          </p>
        </div>

        {contact.info.about && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: '#E9EDEF', marginBottom: '8px' }}>About</h4>
            <p style={{ color: '#8696A0', margin: 0 }}>
              {contact.info.about}
            </p>
          </div>
        )}

        <div>
          <h4 style={{ color: '#E9EDEF', marginBottom: '12px' }}>Actions</h4>
          <button
            style={{
              width: '100%',
              padding: '12px',
              background: 'rgba(0, 168, 132, 0.1)',
              border: '1px solid rgba(0, 168, 132, 0.2)',
              borderRadius: '8px',
              color: '#00A884',
              cursor: 'pointer',
              marginBottom: '8px'
            }}
          >
            Block Contact
          </button>
          <button
            style={{
              width: '100%',
              padding: '12px',
              background: 'rgba(234, 67, 53, 0.1)',
              border: '1px solid rgba(234, 67, 53, 0.2)',
              borderRadius: '8px',
              color: '#EA4335',
              cursor: 'pointer'
            }}
          >
            Delete Chat
          </button>
        </div>
      </div>
    </div>
  );
};

const WhatsAppDesktopChat: React.FC = () => {
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [contacts] = useState(mockContacts);
  const [messages] = useState(mockMessages);

  const selectedContact = selectedContactId
    ? contacts.find(c => c.id === selectedContactId) || null
    : null;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (contact.lastMessage && contact.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSendMessage = (text: string) => {
    console.log('Sending message:', text);
    // Here you would typically dispatch to your context or API
  };

  const handleContactSelect = (contactId: string) => {
    setSelectedContactId(contactId);
    setShowMobileSidebar(false); // Hide sidebar on mobile after selection
  };

  const handleBackToContacts = () => {
    setSelectedContactId(null);
    setShowMobileSidebar(true);
  };

  return (
    <div css={whatsappStyles.container}>
      {/* Mobile Overlay */}
      {(showMobileSidebar || showContactInfo) && (
        <div
          css={whatsappStyles.mobileOverlay}
          onClick={() => {
            setShowMobileSidebar(false);
            setShowContactInfo(false);
          }}
        />
      )}

      {/* Sidebar */}
      <div css={[whatsappStyles.sidebar, showMobileSidebar && 'mobile-open']}>
        {/* Sidebar Header */}
        <div css={whatsappStyles.sidebarHeader}>
          <div css={whatsappStyles.userProfile}>
            <div css={whatsappStyles.userInfo}>
              <ContactAvatar
                contact={{
                  id: 'me',
                  name: 'You',
                  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
                  online: true,
                  info: { phone: '+1 234 567 8999' }
                }}
              />
              <div>
                <div css={whatsappStyles.userName}>Your Name</div>
                <div css={whatsappStyles.userStatus}>Available</div>
              </div>
            </div>
            <div css={whatsappStyles.headerActions}>
              <button css={whatsappStyles.headerButton}>
                <AddIcon />
              </button>
              <button css={whatsappStyles.headerButton}>
                <MoreVertIcon />
              </button>
            </div>
          </div>

          {/* Search */}
          <div css={whatsappStyles.searchContainer}>
            <div css={whatsappStyles.searchIcon}>
              <SearchIcon />
            </div>
            <input
              css={whatsappStyles.searchInput}
              type="text"
              placeholder="Search or start new chat"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Tabs */}
          <div css={whatsappStyles.filterTabs}>
            <button css={[whatsappStyles.filterTab, 'active']}>All</button>
            <button css={whatsappStyles.filterTab}>Unread</button>
            <button css={whatsappStyles.filterTab}>Groups</button>
          </div>
        </div>

        {/* Contacts List */}
        <div css={whatsappStyles.contactsList}>
          {filteredContacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              isSelected={selectedContactId === contact.id}
              onClick={() => handleContactSelect(contact.id)}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <ChatArea
        selectedContact={selectedContact}
        messages={messages.filter(m =>
          selectedContact && (m.from === selectedContact.id || m.to === selectedContact.id)
        )}
        onSendMessage={handleSendMessage}
        onToggleContactInfo={() => setShowContactInfo(!showContactInfo)}
        onBack={handleBackToContacts}
        showBackButton={!!selectedContact}
      />

      {/* Contact Info Panel */}
      <ContactInfoPanel
        contact={selectedContact}
        isOpen={showContactInfo}
        onClose={() => setShowContactInfo(false)}
      />
    </div>
  );
};

// Wrapped component with context
export const WhatsAppChat: React.FC = () => {
  return (
    <ChatProvider>
      <WhatsAppDesktopChat />
    </ChatProvider>
  );
};
