/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { WhatsAppChat } from './WhatsAppChatIndex';
import { WhatsAppNavbar } from './WhatsAppNavbar';
import { ContactPage } from './WhatsAppContactPage';
import { SettingsPage } from './WhatsAppSettingsPage';
import { css } from '@emotion/react';
import {
  Archive as ArchiveIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const layoutStyles = {
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
    background-attachment: fixed;
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
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  content: css`
    flex: 1;
    display: flex;
    min-width: 0;
    position: relative;
    z-index: 1;
  `,

  pageContainer: css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(20px);
    border-radius: 0 20px 20px 0;
    margin: 12px 12px 12px 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(148, 163, 184, 0.1);
    position: relative;
    overflow: hidden;

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

    @media (max-width: 768px) {
      margin: 0;
      border-radius: 0;
      flex: 1;
    }
  `,

  glowEffect: css`
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.02) 0%,
      rgba(139, 92, 246, 0.01) 25%,
      transparent 50%
    );
    animation: rotate 20s linear infinite;
    pointer-events: none;
    z-index: 0;

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
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
            <div css={{
              textAlign: 'center',
              color: '#94A3B8',
              padding: '60px',
              background: 'rgba(30, 41, 59, 0.6)',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <ArchiveIcon css={{
                fontSize: '64px',
                marginBottom: '24px',
                color: '#3B82F6',
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
              }} />
              <h2 css={{
                color: '#F1F5F9',
                marginBottom: '12px',
                fontSize: '24px',
                fontWeight: 600
              }}>
                Archived Chats
              </h2>
              <p css={{ lineHeight: 1.6 }}>
                No archived chats yet. Archive chats to keep them organized while staying accessible.
              </p>
            </div>
          </div>
        );
      case 'starred':
        return (
          <div css={layoutStyles.pageContainer}>
            <div css={{
              textAlign: 'center',
              color: '#94A3B8',
              padding: '60px',
              background: 'rgba(30, 41, 59, 0.6)',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <StarIcon css={{
                fontSize: '64px',
                marginBottom: '24px',
                color: '#FBBF24',
                filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))'
              }} />
              <h2 css={{
                color: '#F1F5F9',
                marginBottom: '12px',
                fontSize: '24px',
                fontWeight: 600
              }}>
                Starred Messages
              </h2>
              <p css={{ lineHeight: 1.6 }}>
                Important messages you've starred will appear here for quick access.
              </p>
            </div>
          </div>
        );
      default:
        return <WhatsAppChat />;
    }
  };

  return (
    <div css={layoutStyles.container}>
      <div css={layoutStyles.glowEffect} />
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
