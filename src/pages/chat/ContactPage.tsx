/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { chatStyles } from './Styles';
import { ContactCard, SearchInput, Modal } from '../../components';
import { useChatContext } from '../../context/ChatContext';

export const ContactPage = () => {
  const {
    filteredContacts,
    contactRequests,
    searchTerm,
    setSearchTerm,
    sendContactRequest,
    acceptContactRequest,
    declineContactRequest,
    deleteContact,
    toggleFavorite,
  } = useChatContext();

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; contact: any }>({ isOpen: false, contact: null });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameOrEmail.trim()) {
      setError('Please enter a username or email.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await sendContactRequest(usernameOrEmail);
      if (result.success) {
        setSubmitted(true);
        setUsernameOrEmail('');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send contact request');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteContact = (contact: any) => {
    setDeleteModal({ isOpen: true, contact });
  };

  const confirmDelete = () => {
    if (deleteModal.contact) {
      deleteContact(deleteModal.contact.id);
      setDeleteModal({ isOpen: false, contact: null });
    }
  };

  const handleToggleFavorite = (contactId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(contactId);
  };

  return (
    <div css={chatStyles.addContactContainer}>
      <div css={chatStyles.addContactCard}>
        <div css={chatStyles.addContactHeader}>
          <div css={chatStyles.addContactIcon}>👤</div>
          <div css={chatStyles.addContactHeaderText}>
            <div css={chatStyles.addContactHeaderTitle}>Contacts</div>
            <div css={chatStyles.addContactHeaderDesc}>Add a new contact or manage your existing contacts.</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} css={chatStyles.addContactForm}>
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={e => setUsernameOrEmail(e.target.value)}
            css={chatStyles.addContactInput}
            disabled={isLoading}
          />
          <button
            type="submit"
            css={chatStyles.addContactButton}
            disabled={isLoading || !usernameOrEmail.trim()}
          >
            {isLoading ? 'Sending...' : 'Add Contact'}
          </button>
        </form>

        {error && <div css={chatStyles.addContactError}>{error}</div>}
        {submitted && !error && (
          <div css={chatStyles.addContactSuccess}>Contact request sent!</div>
        )}

        {/* Pending Requests Section */}
        {contactRequests.length > 0 && (
          <div css={chatStyles.pendingRequestsSection}>
            <div css={chatStyles.pendingRequestsTitle}>Pending Contact Requests</div>
            <div css={chatStyles.pendingRequestsList}>
              {contactRequests.map(request => (
                <div key={request.id} css={chatStyles.pendingRequestItem}>
                  <img src={request.avatar} alt={request.name} css={chatStyles.contactListAvatar} />
                  <div>
                    <div css={chatStyles.contactListName}>{request.name}</div>
                    <div css={chatStyles.contactListLastMessage}>{request.email}</div>
                    {request.message && (
                      <div css={chatStyles.contactListLastMessage} style={{ fontStyle: 'italic', marginTop: 4 }}>
                        "{request.message}"
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
                    <button
                      css={chatStyles.contactActionBtn}
                      onClick={() => acceptContactRequest(request.id)}
                    >
                      Accept
                    </button>
                    <button
                      css={chatStyles.contactActionBtn}
                      onClick={() => declineContactRequest(request.id)}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div css={chatStyles.contactListSection}>
          <div css={chatStyles.contactListTitle}>Your Contacts ({filteredContacts.length})</div>

          <SearchInput
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <div css={chatStyles.contactList}>
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                showLastSeen
                actions={
                  <>
                    <button
                      type="button"
                      css={chatStyles.contactActionBtn}
                      onClick={(e) => handleToggleFavorite(contact.id, e)}
                      title={contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {contact.isFavorite ? '★' : '☆'}
                    </button>
                    <button
                      type="button"
                      css={chatStyles.contactActionBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteContact(contact);
                      }}
                    >
                      Delete
                    </button>
                  </>
                }
              />
            ))}

            {filteredContacts.length === 0 && searchTerm && (
              <div style={{
                textAlign: 'center',
                color: '#bfc8db',
                padding: '32px 16px',
                fontStyle: 'italic'
              }}>
                No contacts found matching "{searchTerm}"
              </div>
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <Modal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, contact: null })}
          title="Delete Contact"
          size="small"
        >
          <div style={{ marginBottom: 16 }}>
            Are you sure you want to delete <strong>{deleteModal.contact?.name}</strong>?
            This action cannot be undone.
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
            <button
              css={chatStyles.contactActionBtn}
              onClick={() => setDeleteModal({ isOpen: false, contact: null })}
            >
              Cancel
            </button>
            <button
              css={chatStyles.addContactButton}
              onClick={confirmDelete}
              style={{ background: 'linear-gradient(90deg, #d63a3a 0%, #fb5a5a 100%)' }}
            >
              Delete
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
