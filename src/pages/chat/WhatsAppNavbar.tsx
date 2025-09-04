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
    width: 60px;
    background: rgba(42, 58, 65, 0.95);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(134, 150, 160, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
      width: 100%;
      height: 60px;
      flex-direction: row;
      justify-content: space-around;
      padding: 0 16px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1000;
      border-right: none;
      border-top: 1px solid rgba(134, 150, 160, 0.15);
    }
  `,

  navButton: css`
    width: 44px;
    height: 44px;
    border: none;
    background: transparent;
    color: rgba(233, 237, 239, 0.6);
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      background: rgba(0, 168, 132, 0.1);
      color: #00A884;
    }

    &.active {
      background: rgba(0, 168, 132, 0.15);
      color: #00A884;
      box-shadow: 0 2px 8px rgba(0, 168, 132, 0.2);
    }

    svg {
      width: 24px;
      height: 24px;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  `,

  badge: css`
    position: absolute;
    top: -2px;
    right: -2px;
    background: #00A884;
    color: white;
    border-radius: 10px;
    min-width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
  `,

  spacer: css`
    flex: 1;

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
        title="Chats"
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
    </nav>
  );
};
