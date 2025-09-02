/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { chatStyles } from './Styles';
import type { ChatCard } from './Types';
import { Navbar } from './Navbar';
import { ContactPage } from './ContactPage';
import { SettingsPage } from './SettingsPage';
import { ContactCard, ChatBubble, MessageInput, UserAvatar } from '../../components';
import { ChatProvider, useChatContext } from '../../context/ChatContext';

const chatCards: ChatCard[] = [
    {
        title: 'London BreakFast',
        desc: 'Maple Street 15',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        url: 'https://example.com/london-breakfast'
    },
    {
        title: 'London Shakes',
        desc: 'Ginger Avenue 78-80',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        url: 'https://example.com/london-shakes'
    },
];

const ChatContent = () => {
    const {
        contacts,
        selectedContact,
        setSelectedContact,
        messages,
        sendMessage,
        markConversationAsRead,
        deleteMessage,
        updateMessageTypingStatus,
        typingUsers,
        getLastMessage,
    } = useChatContext();

    const [detailsOpen, setDetailsOpen] = useState(false);
    const [activePage, setActivePage] = useState<'chat' | 'addContact' | 'settings'>('chat');

    // Handle body scroll for mobile details panel
    useEffect(() => {
        if (detailsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [detailsOpen]);

    const handleContactSelect = (contact: any) => {
        setSelectedContact(contact);
        setDetailsOpen(true);
        // Mark conversation as read when opening
        markConversationAsRead();
    };

    const handleSendMessage = (text: string) => {
        if (selectedContact) {
            sendMessage(text);
        }
    };

    const handleTyping = (isTyping: boolean) => {
        updateMessageTypingStatus(isTyping);
    };

    const isCurrentUserMessage = (message: any) => {
        return message.from === 'me';
    };

    return (
        <div css={chatStyles.container}>
            {/* Sidebar */}
            <Navbar active={activePage} onNavigate={setActivePage} />

            {/* Render page based on activePage */}
            {activePage === 'chat' && (
                <>
                    {/* Contacts */}
                    <aside css={chatStyles.contacts}>
                        <div style={{ padding: '0 24px', fontWeight: 600, fontSize: '1.1rem', marginBottom: 12 }}>
                            My chats ({contacts.length})
                        </div>
                        {contacts.map((contact) => {
                            const lastMessage = getLastMessage(contact.id);
                            return (
                                <ContactCard
                                    key={contact.id}
                                    contact={{
                                        ...contact,
                                        lastMessage: lastMessage?.text || contact.lastMessage,
                                        lastMessageTime: lastMessage?.timestamp || contact.lastMessageTime,
                                    }}
                                    isSelected={selectedContact?.id === contact.id}
                                    onClick={handleContactSelect}
                                />
                            );
                        })}
                    </aside>

                    {/* Chat Room and Details Panel Wrapper */}
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        minWidth: 0,
                        position: 'relative'
                    }}>
                        <main
                            css={chatStyles.chat}
                            style={{
                                flex: 1,
                                width: '100%',
                                transition: 'width 0.3s',
                            }}
                        >
                            {selectedContact ? (
                                <>
                                    {/* Contact Bar */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12,
                                            marginBottom: 24,
                                            background: 'rgba(255,255,255,0.08)',
                                            borderRadius: 12,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                            padding: '10px 18px',
                                            cursor: 'pointer',
                                            border: '1px solid rgba(60,80,180,0.12)',
                                            maxWidth: 340,
                                            color: '#eaf0fa',
                                        }}
                                        onClick={() => setDetailsOpen(true)}
                                    >
                                        <UserAvatar
                                            src={selectedContact.avatar}
                                            name={selectedContact.name}
                                            online={selectedContact.online}
                                            showOnlineIndicator
                                        />
                                        <div>
                                            <div style={{ fontWeight: 500, color:'#eaf0fa' }}>
                                                {selectedContact.name}
                                                {selectedContact.isFavorite && <span style={{ color: '#ffd700', marginLeft: 6 }}>★</span>}
                                            </div>
                                            <div style={{ fontSize: 13, color: '#bfc8db' }}>
                                                {selectedContact.isTyping ? (
                                                    <span style={{ color: '#4ad66d', fontStyle: 'italic' }}>typing...</span>
                                                ) : (
                                                    selectedContact.online ? 'Online' : 'Offline'
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Messages Container */}
                                    <div style={{
                                        flex: 1,
                                        overflowY: 'auto',
                                        marginBottom: 16,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        minHeight: 0
                                    }}>
                                        <div style={{ marginBottom: 24, color: '#bfc8db', fontWeight: 500 }}>Today</div>

                                        {messages.map((message) => (
                                            <ChatBubble
                                                key={message.id}
                                                message={message}
                                                isFromCurrentUser={isCurrentUserMessage(message)}
                                                onDelete={deleteMessage}
                                            />
                                        ))}

                                        {/* Typing indicator */}
                                        {typingUsers.length > 0 && (
                                            <div style={{
                                                padding: '8px 16px',
                                                color: '#4ad66d',
                                                fontSize: '14px',
                                                fontStyle: 'italic'
                                            }}>
                                                {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
                                            </div>
                                        )}

                                        {/* Chat Cards */}
                                        <div css={chatStyles.chatCards}>
                                            {chatCards.map((card, i) => (
                                                <div key={i} css={chatStyles.chatCard}>
                                                    <img src={card.img} alt={card.title} css={chatStyles.chatCardImg} />
                                                    <div css={chatStyles.chatCardTitle}>{card.title}</div>
                                                    <div css={chatStyles.chatCardDesc}>{card.desc}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message Input */}
                                    <MessageInput
                                        onSendMessage={handleSendMessage}
                                        onTyping={handleTyping}
                                        placeholder={`Message ${selectedContact.name}...`}
                                    />
                                </>
                            ) : (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    color: '#bfc8db',
                                    fontSize: '1.2rem',
                                    opacity: 0.7
                                }}>
                                    <span style={{ fontSize: 48, marginBottom: 16 }}>💬</span>
                                    <div>Select a contact to start chatting</div>
                                    <div style={{ fontSize: '1rem', marginTop: 8, opacity: 0.8 }}>
                                        Choose from {contacts.length} contacts in your list
                                    </div>
                                </div>
                            )}
                        </main>

                        {/* Details Panel */}
                        {detailsOpen && selectedContact && (
                            <>
                                {/* Mobile overlay */}
                                <div
                                    css={chatStyles.mobileDetailsOverlay}
                                    onClick={() => { setDetailsOpen(false); }}
                                />

                                <aside css={chatStyles.details}>
                                    <button
                                        css={chatStyles.closeBtn}
                                        onClick={() => { setDetailsOpen(false); }}
                                        style={{ zIndex: 1001 }}
                                    >
                                        &times;
                                    </button>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                        <UserAvatar
                                            src={selectedContact.avatar}
                                            name={selectedContact.name}
                                            size="large"
                                            online={selectedContact.online}
                                            showOnlineIndicator
                                        />
                                        <div>
                                            <div style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                                                {selectedContact.name}
                                                {selectedContact.isFavorite && (
                                                    <span style={{ color: '#ffd700' }}>★</span>
                                                )}
                                            </div>
                                            <div style={{ fontSize: 13, color: '#bfc8db' }}>
                                                {selectedContact.online ? 'Online' : 'Offline'}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 16 }}>
                                        <div style={{ fontWeight: 600, marginBottom: 8 }}>General Info</div>
                                        <div style={{ fontSize: 14, color: '#bfc8db', marginBottom: 4 }}>
                                            WhatsApp: {selectedContact.info.whatsapp}
                                        </div>
                                        {selectedContact.info.email && (
                                            <div style={{ fontSize: 14, color: '#bfc8db', marginBottom: 4 }}>
                                                Email: {selectedContact.info.email}
                                            </div>
                                        )}
                                        {selectedContact.info.phone && (
                                            <div style={{ fontSize: 14, color: '#bfc8db' }}>
                                                Phone: {selectedContact.info.phone}
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ marginBottom: 16 }}>
                                        <div style={{ fontWeight: 600, marginBottom: 8 }}>Additional info</div>
                                        <div style={{ fontSize: 14, color: '#bfc8db' }}>
                                            Group: <span style={{
                                                background: 'rgba(60,80,180,0.18)',
                                                color: '#eaf0fa',
                                                borderRadius: 4,
                                                padding: '2px 6px',
                                                fontWeight: 500
                                            }}>
                                                {selectedContact.info.group}
                                            </span>
                                        </div>
                                    </div>

                                    {selectedContact.isBlocked && (
                                        <div style={{
                                            background: 'rgba(255, 107, 107, 0.1)',
                                            border: '1px solid rgba(255, 107, 107, 0.3)',
                                            borderRadius: 8,
                                            padding: 12,
                                            marginTop: 16,
                                            color: '#ff6b6b',
                                            fontSize: 14
                                        }}>
                                            ⚠️ This contact is blocked
                                        </div>
                                    )}
                                </aside>
                            </>
                        )}
                    </div>
                </>
            )}
            {activePage === 'addContact' && (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ContactPage />
                </div>
            )}
            {activePage === 'settings' && (
                <SettingsPage />
            )}
        </div>
    );
};

export const ChatIndex = () => {
    return (
        <ChatProvider>
            <ChatContent />
        </ChatProvider>
    );
};
