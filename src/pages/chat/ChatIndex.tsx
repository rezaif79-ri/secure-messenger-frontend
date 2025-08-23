/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { chatStyles } from './Styles';
import type { Contact, ChatMessage, ChatCard } from './Types';
import { Navbar } from './Navbar';


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

const chatMessages: ChatMessage[] = [
    { from: 'Diana Jenkins', text: 'Hello!' },
    { from: 'Diana Jenkins', text: 'Do you have cafes in London?' },
    { from: 'me', text: 'Hello, sure - we have two places in London City' },
];

const chatCards: ChatCard[] = [
    {
        title: 'London BreakFast',
        desc: 'Maple Street 15',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
        title: 'London Shakes',
        desc: 'Ginger Avenue 78-80',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
];

export const ChatIndex = () => {
    const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <div css={chatStyles.container}>
            {/* Sidebar */}
            <Navbar />

            {/* Contacts */}
            <aside css={chatStyles.contacts}>
                <div style={{ padding: '0 24px', fontWeight: 600, fontSize: '1.1rem', marginBottom: 12 }}>My chats</div>
                {contacts.map((c) => (
                    <div
                        key={c.id}
                        css={chatStyles.contactCard}
                        onClick={() => { setSelectedContact(c); setDetailsOpen(true); }}
                        style={{ background: selectedContact.id === c.id ? 'rgba(60,80,180,0.32)' : undefined }}
                    >
                        <img src={c.avatar} alt={c.name} css={chatStyles.avatar} />
                        <div>
                            <div style={{ fontWeight: 500, color:'#eaf0fa' }}>{c.name}</div>
                            <div style={{ fontSize: 13, color: '#bfc8db' }}>{c.lastMessage}</div>
                        </div>
                    </div>
                ))}
            </aside>

            {/* Chat Room and Details Panel Wrapper */}
            <div style={{ display: 'flex', flex: 1, minWidth: 0 }}>
                <main
                    css={chatStyles.chat}
                    style={{
                        flex: 1,
                        width: '100%',
                        transition: 'width 0.3s',
                    }}
                >
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
                        <img src={selectedContact.avatar} alt={selectedContact.name} css={chatStyles.avatar} />
                        <div>
                            <div style={{ fontWeight: 500, color:'#eaf0fa' }}>{selectedContact.name}</div>
                            <div style={{ fontSize: 13, color: '#bfc8db' }}>{selectedContact.online ? 'Online' : 'Offline'}</div>
                        </div>
                    </div>
                    <div style={{ marginBottom: 24, color: '#bfc8db', fontWeight: 500 }}>Today</div>
                    {chatMessages
                        .filter(msg => msg.from === selectedContact.name || msg.from === 'me')
                        .map((msg, i) => (
                            <div
                                key={i}
                                css={[chatStyles.chatBubble, msg.from === 'me' && chatStyles.chatBubbleMe]}
                                style={{ alignSelf: msg.from === 'me' ? 'flex-end' : 'flex-start' }}
                            >
                                {msg.text}
                            </div>
                        ))}
                    <div css={chatStyles.chatCards}>
                        {chatCards.map((card, i) => (
                            <div key={i} css={chatStyles.chatCard}>
                                <img src={card.img} alt={card.title} css={chatStyles.chatCardImg} />
                                <div css={chatStyles.chatCardTitle}>{card.title}</div>
                                <div css={chatStyles.chatCardDesc}>{card.desc}</div>
                            </div>
                        ))}
                    </div>
                </main>
                {/* Details Panel */}
                {detailsOpen ? (
                    <aside css={chatStyles.details}>
                        <button css={chatStyles.closeBtn} onClick={() => setDetailsOpen(false)}>&times;</button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <img src={selectedContact.avatar} alt={selectedContact.name} css={chatStyles.avatar} />
                            <div>
                                <div style={{ fontWeight: 500 }}>{selectedContact.name}</div>
                                <div style={{ fontSize: 13, color: '#bfc8db' }}>{selectedContact.online ? 'Online' : 'Offline'}</div>
                            </div>
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <div style={{ fontWeight: 600, marginBottom: 8 }}>General Info</div>
                            <div style={{ fontSize: 14, color: '#bfc8db' }}>WhatsApp number: {selectedContact.info.whatsapp}</div>
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, marginBottom: 8 }}>Additional info</div>
                            <div style={{ fontSize: 14, color: '#bfc8db' }}>Group: <span style={{ background: 'rgba(60,80,180,0.18)', color: '#eaf0fa', borderRadius: 4, padding: '2px 6px', fontWeight: 500 }}>{selectedContact.info.group}</span></div>
                        </div>
                    </aside>
                ) : null}
            </div>
        </div>
    );
};
