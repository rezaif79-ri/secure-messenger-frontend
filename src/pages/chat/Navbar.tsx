/** @jsxImportSource @emotion/react */
import { chatStyles } from './Styles';

interface NavbarProps {
  active: 'chat' | 'addContact' | 'settings';
  onNavigate: (page: 'chat' | 'addContact' | 'settings') => void;
}

export const Navbar = ({ active, onNavigate }: NavbarProps) => {
  return (
    <nav css={chatStyles.sidebar}>
      <button
        css={[chatStyles.chatNavButton, active === 'chat' && { background: 'rgba(60,80,180,0.28)', boxShadow: '0 4px 12px rgba(60,80,180,0.18)' }]}
        aria-label="Chats"
        onClick={() => onNavigate('chat')}
      >
        <span style={{ fontSize: 28 }}>{active === 'chat' ? '💬' : '💭'}</span>
      </button>
      <button
        css={[chatStyles.chatNavButton, active === 'addContact' && { background: 'rgba(60,180,80,0.28)', boxShadow: '0 4px 12px rgba(60,180,80,0.18)' }]}
        aria-label="Add Contact"
        onClick={() => onNavigate('addContact')}
      >
        <span style={{ fontSize: 24 }}>{active === 'addContact' ? '➕' : '👤'}</span>
      </button>
      <div style={{ flex: 1 }} />
      <button
        css={[chatStyles.chatNavButton, active === 'settings' && { background: 'rgba(180,180,60,0.28)', boxShadow: '0 4px 12px rgba(180,180,60,0.18)' }]}
        aria-label="Settings"
        onClick={() => onNavigate('settings')}
      >
        <span style={{ fontSize: 24 }}>{active === 'settings' ? '🛠️' : '⚙️'}</span>
      </button>
    </nav>
  );
};
