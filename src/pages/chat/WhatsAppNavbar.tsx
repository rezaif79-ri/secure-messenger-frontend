/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Chat as ChatIcon,
  Contacts as ContactsIcon,
  Settings as SettingsIcon,
  Archive as ArchiveIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const navbarStyles = {
  container: css`
    width: 72px;
    background: rgba(30, 41, 59, 0.95);
    backdrop-filter: blur(24px);
    border-right: 1px solid rgba(148, 163, 184, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.3);
    margin: 12px 0 12px 12px;
    border-radius: 20px 0 0 20px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg,
        rgba(59, 130, 246, 0.05) 0%,
        transparent 50%,
        rgba(139, 92, 246, 0.03) 100%
      );
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -2px;
      width: 4px;
      height: 60px;
      background: linear-gradient(180deg,
        transparent,
        rgba(59, 130, 246, 0.6),
        transparent
      );
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
      transform: translateY(-50%);
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 72px;
      flex-direction: row;
      justify-content: space-around;
      padding: 0 20px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1000;
      border-right: none;
      border-top: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 20px 20px 0 0;
      margin: 0;

      &::after {
        display: none;
      }
    }
  `,

  navButton: css`
    width: 52px;
    height: 52px;
    border: none;
    background: transparent;
    color: rgba(241, 245, 249, 0.6);
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    backdrop-filter: blur(8px);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 16px;
      padding: 1px;
      background: linear-gradient(145deg, transparent, rgba(59, 130, 246, 0.2), transparent);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba(59, 130, 246, 0.15);
      color: #93C5FD;
      transform: translateY(-2px) scale(1.05);
      box-shadow:
        0 8px 25px rgba(59, 130, 246, 0.25),
        0 0 20px rgba(59, 130, 246, 0.15);

      &::before {
        opacity: 1;
      }
    }

    &.active {
      background: rgba(59, 130, 246, 0.2);
      color: #60A5FA;
      box-shadow:
        0 8px 25px rgba(59, 130, 246, 0.3),
        0 0 30px rgba(59, 130, 246, 0.2);
      transform: scale(1.1);

      &::before {
        opacity: 1;
        background: linear-gradient(145deg,
          rgba(59, 130, 246, 0.3),
          rgba(139, 92, 246, 0.2),
          rgba(59, 130, 246, 0.3)
        );
      }
    }

    svg {
      width: 28px;
      height: 28px;
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
      width: 48px;
      height: 48px;
    }
  `,

  badge: css`
    position: absolute;
    top: -6px;
    right: -6px;
    background: linear-gradient(135deg, #3B82F6, #1D4ED8);
    color: white;
    border-radius: 12px;
    min-width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    border: 2px solid rgba(30, 41, 59, 0.8);
    box-shadow:
      0 4px 12px rgba(59, 130, 246, 0.4),
      0 0 20px rgba(59, 130, 246, 0.3);
    animation: pulse 2s infinite;

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `,

  spacer: css`
    flex: 1;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 40px;
      background: linear-gradient(180deg,
        transparent,
        rgba(148, 163, 184, 0.2),
        transparent
      );
      transform: translate(-50%, -50%);
      border-radius: 1px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `,

  secureIndicator: css`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #10B981, #059669);
    border-radius: 50%;
    box-shadow:
      0 0 10px rgba(16, 185, 129, 0.5),
      0 0 20px rgba(16, 185, 129, 0.2);
    animation: securePulse 3s infinite;

    @keyframes securePulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @media (max-width: 768px) {
      display: none;
    }
  `,
};

interface WhatsAppNavbarProps {
  activeSection: 'chats' | 'contacts' | 'settings' | 'archived' | 'starred';
  onNavigate: (section: 'chats' | 'contacts' | 'settings' | 'archived' | 'starred') => void;
  unreadCount?: number;
}

export const WhatsAppNavbar: React.FC<WhatsAppNavbarProps> = ({
  activeSection,
  onNavigate,
  unreadCount = 0
}) => {
  return (
    <nav css={navbarStyles.container}>
      <button
        css={[navbarStyles.navButton, activeSection === 'chats' && 'active']}
        onClick={() => onNavigate('chats')}
        title="Secure Chats"
      >
        <ChatIcon />
        {unreadCount > 0 && (
          <div css={navbarStyles.badge}>
            {unreadCount > 99 ? '99+' : unreadCount}
          </div>
        )}
      </button>

      <button
        css={[navbarStyles.navButton, activeSection === 'contacts' && 'active']}
        onClick={() => onNavigate('contacts')}
        title="Contacts"
      >
        <ContactsIcon />
      </button>

      <button
        css={[navbarStyles.navButton, activeSection === 'starred' && 'active']}
        onClick={() => onNavigate('starred')}
        title="Starred Messages"
      >
        <StarIcon />
      </button>

      <button
        css={[navbarStyles.navButton, activeSection === 'archived' && 'active']}
        onClick={() => onNavigate('archived')}
        title="Archived Chats"
      >
        <ArchiveIcon />
      </button>

      <div css={navbarStyles.spacer} />

      <button
        css={[navbarStyles.navButton, activeSection === 'settings' && 'active']}
        onClick={() => onNavigate('settings')}
        title="Settings"
      >
        <SettingsIcon />
      </button>

      <div css={navbarStyles.secureIndicator} title="Secure Connection" />
    </nav>
  );
};
