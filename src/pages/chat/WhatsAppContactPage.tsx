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
    max-width: 800px;
    height: 100%;
    background: rgba(42, 58, 65, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 95vw;
      height: 90vh;
      border-radius: 12px;
    }
  `,

  header: css`
    padding: 20px 24px;
    background: rgba(32, 44, 51, 0.85);
    border-bottom: 1px solid rgba(134, 150, 160, 0.15);
    backdrop-filter: blur(16px);
  `,

  headerTitle: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    h1 {
      color: #E9EDEF;
      font-size: 24px;
      font-weight: 500;
      margin: 0;
    }
  `,

  headerActions: css`
    display: flex;
    gap: 8px;
  `,

  headerButton: css`
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    color: #8696A0;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 168, 132, 0.1);
      color: #00A884;
    }
  `,

  searchContainer: css`
    position: relative;
  `,

  searchInput: css`
    width: 100%;
    padding: 12px 16px 12px 48px;
    border: none;
    border-radius: 8px;
    background: rgba(18, 30, 40, 0.7);
    color: #E9EDEF;
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
      color: #667781;
    }

    &:focus {
      background: rgba(45, 55, 62, 0.9);
      box-shadow: 0 0 0 2px rgba(0, 168, 132, 0.3);
    }
  `,

  searchIcon: css`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #667781;
  `,

  content: css`
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(134, 150, 160, 0.15) transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(134, 150, 160, 0.15);
      border-radius: 3px;
    }
  `,

  section: css`
    padding: 16px 0;
    border-bottom: 1px solid rgba(134, 150, 160, 0.1);

    &:last-child {
      border-bottom: none;
    }
  `,

  sectionTitle: css`
    padding: 0 24px 12px;
    color: #00A884;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  contactItem: css`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(45, 55, 62, 0.5);
    }
  `,

  avatar: css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
    border: 2px solid rgba(134, 150, 160, 0.15);
  `,

  contactInfo: css`
    flex: 1;
    min-width: 0;
  `,

  contactName: css`
    color: #E9EDEF;
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 4px 0;
  `,

  contactPhone: css`
    color: #8696A0;
    font-size: 14px;
    margin: 0;
  `,

  contactActions: css`
    display: flex;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s ease;

    .contact-item:hover & {
      opacity: 1;
    }
  `,

  actionButton: css`
    width: 36px;
    height: 36px;
    border: none;
    background: rgba(0, 168, 132, 0.1);
    color: #00A884;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 168, 132, 0.2);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  `,

  addContactButton: css`
    margin: 16px 24px;
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(45deg, #00A884, #00BFA5);
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 168, 132, 0.3);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 168, 132, 0.4);
    }
  `,

  emptyState: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
    text-align: center;
    color: #8696A0;

    svg {
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    h3 {
      color: #E9EDEF;
      margin-bottom: 8px;
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
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    status: 'Available'
  },
  {
    id: '2',
    name: 'John Smith',
    phone: '+1 234 567 8901',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    status: 'Busy'
  },
  {
    id: '3',
    name: 'Emma Davis',
    phone: '+1 234 567 8902',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    status: 'At work'
  },
];

const ContactItem: React.FC<{
  contact: Contact;
  onMessage: (contact: Contact) => void;
  onCall: (contact: Contact) => void;
}> = ({ contact, onMessage, onCall }) => {
  return (
    <div css={[contactsStyles.contactItem]} className="contact-item">
      <img
        css={contactsStyles.avatar}
        src={contact.avatar || `https://ui-avatars.com/api/?name=${contact.name}&background=00a884&color=ffffff`}
        alt={contact.name}
      />
      <div css={contactsStyles.contactInfo}>
        <h3 css={contactsStyles.contactName}>{contact.name}</h3>
        <p css={contactsStyles.contactPhone}>{contact.phone}</p>
      </div>
      <div css={contactsStyles.contactActions}>
        <button
          css={contactsStyles.actionButton}
          onClick={() => onMessage(contact)}
          title="Message"
        >
          <MessageIcon />
        </button>
        <button
          css={contactsStyles.actionButton}
          onClick={() => onCall(contact)}
          title="Call"
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
          <h1>Contacts</h1>
          <div css={contactsStyles.headerActions}>
            <button css={contactsStyles.headerButton} title="Search">
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
          Add New Contact
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
