/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { WhatsAppChat } from './WhatsAppChatIndex';
import { WhatsAppNavbar } from './WhatsAppNavbar';
import { ContactPage } from './WhatsAppContactPage';
import { SettingsPage } from './WhatsAppSettingsPage';
import { css } from '@emotion/react';

const layoutStyles = {
  container: css`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg,
      rgba(17, 27, 33, 0.95) 0%,
      rgba(42, 58, 65, 0.9) 50%,
      rgba(32, 44, 51, 0.95) 100%
    );
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  `,

  content: css`
    flex: 1;
    display: flex;
    min-width: 0; /* Prevents flex item from overflowing */
  `,

  pageContainer: css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(18, 30, 40, 0.7);
  `,
};

type ActiveSection = 'chats' | 'contacts' | 'settings' | 'archived' | 'starred';

export const ChatIndex: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('chats');
  const [unreadCount] = useState(3); // Mock unread count

  const renderContent = () => {
    switch (activeSection) {
      case 'chats':
        return <WhatsAppChat />;
      case 'contacts':
        return (
          <div css={layoutStyles.pageContainer}>
            <ContactPage />
          </div>
        );
      case 'settings':
        return <SettingsPage />;
      case 'archived':
        return (
          <div css={layoutStyles.pageContainer}>
            <div style={{ textAlign: 'center', color: '#8696A0' }}>
              <h2>Archived Chats</h2>
              <p>No archived chats yet</p>
            </div>
          </div>
        );
      case 'starred':
        return (
          <div css={layoutStyles.pageContainer}>
            <div style={{ textAlign: 'center', color: '#8696A0' }}>
              <h2>Starred Messages</h2>
              <p>No starred messages yet</p>
            </div>
          </div>
        );
      default:
        return <WhatsAppChat />;
    }
  };

  return (
    <div css={layoutStyles.container}>
      <WhatsAppNavbar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        unreadCount={unreadCount}
      />
      <div css={layoutStyles.content}>
        {renderContent()}
      </div>
    </div>
  );
};
