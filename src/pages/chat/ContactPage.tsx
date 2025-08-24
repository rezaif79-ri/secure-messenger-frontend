/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { chatStyles } from './Styles';
import type { Contact } from './Types';

const contacts: Contact[] = [
    {
        id: 1,
        name: 'Diana Jenkins',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        lastMessage: 'Hello!',
        online: true,
        info: {
            whatsapp: '48352674290',
            group: 'Support',
        },
    },
    {
        id: 2,
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'See you soon!',
        online: false,
        info: {
            whatsapp: '48352674291',
            group: 'Sales',
        },
    },
    {
        id: 3,
        name: 'Alex Blue',
        avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
        lastMessage: 'Thanks!',
        online: true,
        info: {
            whatsapp: '48352674292',
            group: 'Marketing',
        },
    },
    {
        id: 4,
        name: 'Sam Red',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        lastMessage: 'Let me know.',
        online: false,
        info: {
            whatsapp: '48352674293',
            group: 'Support',
        },
    },
];

const pendingRequests = [
  {
    id: 101,
    name: 'Emily Green',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    email: 'emily.green@example.com',
  },
  {
    id: 102,
    name: 'Michael Brown',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    email: 'michael.brown@example.com',
  },
];

export const ContactPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [editContact, setEditContact] = useState<Contact | null>(null);
  const [deleteContact, setDeleteContact] = useState<Contact | null>(null);
  const [requests, setRequests] = useState(pendingRequests);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameOrEmail.trim()) {
      setError('Please enter a username or email.');
      return;
    }
    setSubmitted(true);
    setError('');
    // TODO: Add API call to add contact
  };

  const handleAccept = (id: number) => {
    setRequests(requests.filter(r => r.id !== id));
    // TODO: Add to contacts
  };
  const handleDecline = (id: number) => {
    setRequests(requests.filter(r => r.id !== id));
  };

  const filteredContacts = contacts.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.info?.whatsapp?.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div css={chatStyles.addContactContainer}>
      <div css={chatStyles.addContactCard}>
        <div css={chatStyles.addContactHeader}>
          <div css={chatStyles.addContactIcon}>👤</div>
          <div css={chatStyles.addContactHeaderText}>
            <div css={chatStyles.addContactHeaderTitle}>Contacts</div>
            <div css={chatStyles.addContactHeaderDesc}>Add a new contact or view your existing contacts.</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} css={chatStyles.addContactForm}>
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={e => setUsernameOrEmail(e.target.value)}
            css={chatStyles.addContactInput}
          />
          <button type="submit" css={chatStyles.addContactButton}>Add Contact</button>
        </form>
        {error && <div css={chatStyles.addContactError}>{error}</div>}
        {submitted && !error && (
          <div css={chatStyles.addContactSuccess}>Contact request sent!</div>
        )}
        {/* Pending Requests Section */}
        {requests.length > 0 && (
          <div css={chatStyles.pendingRequestsSection}>
            <div css={chatStyles.pendingRequestsTitle}>Pending Contact Requests</div>
            <div css={chatStyles.pendingRequestsList}>
              {requests.map(r => (
                <div key={r.id} css={chatStyles.pendingRequestItem}>
                  <img src={r.avatar} alt={r.name} css={chatStyles.contactListAvatar} />
                  <div>
                    <div css={chatStyles.contactListName}>{r.name}</div>
                    <div css={chatStyles.contactListLastMessage}>{r.email}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                    <button css={chatStyles.contactActionBtn} onClick={() => handleAccept(r.id)}>Accept</button>
                    <button css={chatStyles.contactActionBtn} onClick={() => handleDecline(r.id)}>Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div css={chatStyles.contactListSection}>
          <div css={chatStyles.contactListTitle}>Your Contacts</div>
          <input
            type="text"
            placeholder="Search contacts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            css={chatStyles.addContactInput}
            style={{ marginBottom: 10 }}
          />
          <div css={chatStyles.contactList}>
            {filteredContacts.map((c) => (
              <div key={c.id} css={chatStyles.contactListItem}>
                <img src={c.avatar} alt={c.name} css={chatStyles.contactListAvatar} />
                <div>
                  <div css={chatStyles.contactListName}>{c.name}</div>
                  <div css={chatStyles.contactListLastMessage}>{c.lastMessage}</div>
                </div>
                <div css={chatStyles.contactListStatus}>
                  {c.online ? 'Online' : 'Offline'}
                </div>
                <div style={{ display: 'flex', gap: 8, marginLeft: 12 }}>
                  <button
                    type="button"
                    css={chatStyles.contactActionBtn}
                    onClick={() => setEditContact(c)}
                  >Edit</button>
                  <button
                    type="button"
                    css={chatStyles.contactActionBtn}
                    onClick={() => setDeleteContact(c)}
                  >Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Edit Modal */}
        {editContact && (
          <div css={chatStyles.modalOverlay}>
            <div css={chatStyles.modalCard}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 12 }}>Edit Contact</div>
              <input
                type="text"
                defaultValue={editContact.name}
                css={chatStyles.addContactInput}
                style={{ marginBottom: 10 }}
              />
              <button css={chatStyles.addContactButton} onClick={() => setEditContact(null)}>Save</button>
              <button css={chatStyles.contactActionBtn} onClick={() => setEditContact(null)} style={{ marginTop: 8 }}>Cancel</button>
            </div>
          </div>
        )}
        {/* Delete Dialog */}
        {deleteContact && (
          <div css={chatStyles.modalOverlay}>
            <div css={chatStyles.modalCard}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 12 }}>Delete Contact</div>
              <div style={{ marginBottom: 16 }}>Are you sure you want to delete <b>{deleteContact.name}</b>?</div>
              <button css={chatStyles.addContactButton} onClick={() => setDeleteContact(null)}>Delete</button>
              <button css={chatStyles.contactActionBtn} onClick={() => setDeleteContact(null)} style={{ marginTop: 8 }}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
