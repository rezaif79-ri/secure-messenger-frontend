/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Search as SearchIcon,
  PersonAdd as PersonAddIcon,
  MoreVert as MoreVertIcon,
  Phone as PhoneIcon,
  Message as MessageIcon,
} from '@mui/icons-material';

const contactsStyles = {
  container: css`
    width: 100%;
    max-width: 900px;
    height: 100%;
    background: rgba(30, 41, 59, 0.9);
    backdrop-filter: blur(24px);
    border-radius: 20px;
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(59, 130, 246, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.15);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(145deg,
        rgba(59, 130, 246, 0.05) 0%,
        transparent 50%,
        rgba(139, 92, 246, 0.03) 100%
      );
      pointer-events: none;
    }

    @media (max-width: 768px) {
      width: 95vw;
      height: 90vh;
      border-radius: 16px;
      max-width: none;
    }
  `,

  header: css`
    padding: 24px 28px;
    background: rgba(15, 23, 42, 0.85);
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    backdrop-filter: blur(20px);
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
        rgba(59, 130, 246, 0.3),
        transparent
      );
    }
  `,

  headerTitle: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      color: #F1F5F9;
      font-size: 28px;
      font-weight: 600;
      margin: 0;
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      background: linear-gradient(135deg, #F1F5F9, #94A3B8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `,

  headerActions: css`
    display: flex;
    gap: 12px;
  `,

  headerButton: css`
    width: 44px;
    height: 44px;
    border: none;
    background: rgba(59, 130, 246, 0.1);
    color: #94A3B8;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(148, 163, 184, 0.1);

    &:hover {
      background: rgba(59, 130, 246, 0.2);
      color: #60A5FA;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
    }

    svg {
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
    }
  `,

  searchContainer: css`
    position: relative;
  `,

  searchInput: css`
    width: 100%;
    padding: 16px 20px 16px 56px;
    border: none;
    border-radius: 12px;
    background: rgba(15, 23, 42, 0.8);
    color: #F1F5F9;
    font-size: 15px;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(148, 163, 184, 0.1);

    &::placeholder {
      color: #64748B;
    }

    &:focus {
      background: rgba(30, 41, 59, 0.9);
      box-shadow:
        0 0 0 3px rgba(59, 130, 246, 0.2),
        0 8px 25px rgba(0, 0, 0, 0.15);
      border-color: rgba(59, 130, 246, 0.3);
    }
  `,

  searchIcon: css`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748B;
    transition: color 0.3s ease;

    .search-input:focus + & {
      color: #3B82F6;
    }
  `,

  content: css`
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.2) transparent;

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

  section: css`
    padding: 20px 0;
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);

    &:last-child {
      border-bottom: none;
    }
  `,

  sectionTitle: css`
    padding: 0 28px 16px;
    color: #3B82F6;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
  `,

  contactItem: css`
    display: flex;
    align-items: center;
    padding: 16px 28px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border-radius: 0;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg,
        transparent,
        rgba(59, 130, 246, 0.8),
        transparent
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba(51, 65, 85, 0.6);
      backdrop-filter: blur(8px);
      transform: translateX(8px);

      &::before {
        opacity: 1;
      }
    }
  `,

  avatar: css`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 16px;
    border: 3px solid rgba(59, 130, 246, 0.2);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    .contact-item:hover & {
      border-color: rgba(59, 130, 246, 0.4);
      box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(59, 130, 246, 0.2);
      transform: scale(1.05);
    }
  `,

  contactInfo: css`
    flex: 1;
    min-width: 0;
  `,

  contactName: css`
    color: #F1F5F9;
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 6px 0;
    text-shadow: 0 0 10px rgba(241, 245, 249, 0.1);
  `,

  contactPhone: css`
    color: #94A3B8;
    font-size: 14px;
    margin: 0;
  `,

  contactActions: css`
    display: flex;
    gap: 12px;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    .contact-item:hover & {
      opacity: 1;
      transform: translateX(0);
    }
  `,

  actionButton: css`
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(59, 130, 246, 0.15);
    color: #60A5FA;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(59, 130, 246, 0.2);

    &:hover {
      background: rgba(59, 130, 246, 0.25);
      transform: translateY(-2px) scale(1.1);
      box-shadow:
        0 8px 25px rgba(59, 130, 246, 0.3),
        0 0 20px rgba(59, 130, 246, 0.2);
    }

    svg {
      width: 20px;
      height: 20px;
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
    }
  `,

  addContactButton: css`
    margin: 20px 28px;
    padding: 16px 24px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(135deg, #3B82F6, #1D4ED8, #6366F1);
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow:
      0 8px 25px rgba(59, 130, 246, 0.4),
      0 0 40px rgba(59, 130, 246, 0.1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow:
        0 12px 35px rgba(59, 130, 246, 0.5),
        0 0 50px rgba(59, 130, 246, 0.2);

      &::before {
        left: 100%;
      }
    }

    svg {
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
    }
  `,

  emptyState: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 28px;
    text-align: center;
    color: #94A3B8;

    svg {
      width: 80px;
      height: 80px;
      margin-bottom: 24px;
      opacity: 0.6;
      filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.2));
    }

    h3 {
      color: #F1F5F9;
      margin-bottom: 12px;
      font-size: 20px;
      font-weight: 600;
    }

    p {
      line-height: 1.6;
      max-width: 300px;
    }
  `,
};

interface Contact {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  status?: string;
}

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    phone: '+1 234 567 8900',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    status: '🟢 Available'
  },
  {
    id: '2',
    name: 'John Smith',
    phone: '+1 234 567 8901',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    status: '🟡 Busy'
  },
  {
    id: '3',
    name: 'Emma Davis',
    phone: '+1 234 567 8902',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    status: '🔵 At work'
  },
  {
    id: '4',
    name: 'Alex Chen',
    phone: '+1 234 567 8903',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    status: '🔒 Secure mode'
  },
  {
    id: '5',
    name: 'Maria Rodriguez',
    phone: '+1 234 567 8904',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    status: '🌙 Do not disturb'
  }
];

const ContactItem: React.FC<{
  contact: Contact;
  onMessage: (contact: Contact) => void;
  onCall: (contact: Contact) => void;
}> = ({ contact, onMessage, onCall }) => {
  return (
    <div css={[contactsStyles.contactItem]} className="contact-item hover-lift">
      <img
        css={contactsStyles.avatar}
        src={contact.avatar || `https://ui-avatars.com/api/?name=${contact.name}&background=3b82f6&color=ffffff`}
        alt={contact.name}
      />
      <div css={contactsStyles.contactInfo}>
        <h3 css={contactsStyles.contactName}>{contact.name}</h3>
        <p css={contactsStyles.contactPhone}>{contact.phone}</p>
        {contact.status && (
          <p css={{
            color: '#60A5FA',
            fontSize: '13px',
            margin: '4px 0 0 0',
            fontStyle: 'italic'
          }}>
            {contact.status}
          </p>
        )}
      </div>
      <div css={contactsStyles.contactActions}>
        <button
          css={contactsStyles.actionButton}
          onClick={() => onMessage(contact)}
          title="Start Secure Chat"
        >
          <MessageIcon />
        </button>
        <button
          css={contactsStyles.actionButton}
          onClick={() => onCall(contact)}
          title="Secure Call"
        >
          <PhoneIcon />
        </button>
        <button
          css={contactsStyles.actionButton}
          title="More options"
        >
          <MoreVertIcon />
        </button>
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts] = useState(mockContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  const handleAddContact = () => {
    console.log('Add new contact');
  };

  const handleMessage = (contact: Contact) => {
    console.log('Message', contact);
  };

  const handleCall = (contact: Contact) => {
    console.log('Call', contact);
  };

  return (
    <div css={contactsStyles.container}>
      <div css={contactsStyles.header}>
        <div css={contactsStyles.headerTitle}>
          <div>
            <h1>Secure Contacts</h1>
            <p css={{
              color: '#60A5FA',
              fontSize: '13px',
              margin: '4px 0 0 0',
              fontWeight: 500,
              textShadow: '0 0 10px rgba(96, 165, 250, 0.3)'
            }}>
              🔒 End-to-end encrypted
            </p>
          </div>
          <div css={contactsStyles.headerActions}>
            <button css={contactsStyles.headerButton} title="Search contacts">
              <SearchIcon />
            </button>
            <button css={contactsStyles.headerButton} title="More options">
              <MoreVertIcon />
            </button>
          </div>
        </div>

        <div css={contactsStyles.searchContainer}>
          <div css={contactsStyles.searchIcon}>
            <SearchIcon />
          </div>
          <input
            css={contactsStyles.searchInput}
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div css={contactsStyles.content}>
        <button css={contactsStyles.addContactButton} onClick={handleAddContact}>
          <PersonAddIcon />
          Add Secure Contact
        </button>

        <div css={contactsStyles.section}>
          <div css={contactsStyles.sectionTitle}>
            {filteredContacts.length} Contact{filteredContacts.length !== 1 ? 's' : ''}
          </div>

          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onMessage={handleMessage}
                onCall={handleCall}
              />
            ))
          ) : (
            <div css={contactsStyles.emptyState}>
              <PersonAddIcon />
              <h3>No contacts found</h3>
              <p>{searchQuery ? 'Try a different search term' : 'Add some contacts to get started'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
