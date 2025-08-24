/** @jsxImportSource @emotion/react */
import { chatStyles } from './Styles';
import ChatIcon from '@mui/icons-material/Chat';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface NavbarProps {
  active: 'chat' | 'addContact' | 'settings';
  onNavigate: (page: 'chat' | 'addContact' | 'settings') => void;
}

export const Navbar = ({ active, onNavigate }: NavbarProps) => {
  return (
    <nav css={chatStyles.sidebar}>
      <button
        css={[chatStyles.chatNavButton, { border: '2px solid #eaf0fa', background: 'rgba(60,80,180,0.18)' }, active === 'chat' && { background: 'rgba(60,80,180,0.28)', boxShadow: '0 4px 12px rgba(60,80,180,0.18)' }]}
        aria-label="Chats"
        onClick={() => onNavigate('chat')}
      >
        <ChatIcon />
        {/* <span style={{ color: '#eaf0fa', fontSize: 10 }}>Chat</span> */}
      </button>
      <button
        css={[chatStyles.chatNavButton, { border: '2px solid #eaf0fa', background: 'rgba(60,180,80,0.18)' }, active === 'addContact' && { background: 'rgba(60,180,80,0.28)', boxShadow: '0 4px 12px rgba(60,180,80,0.18)' }]}
        aria-label="Add Contact"
        onClick={() => onNavigate('addContact')}
      >
        <ContactsIcon />
        {/* <span style={{ color: '#eaf0fa', fontSize: 10 }}>Add</span> */}
      </button>
      <div style={{ flex: 1 }} />
      <button
        css={[chatStyles.chatNavButton, { border: '2px solid #eaf0fa', background: 'rgba(180,180,60,0.18)' }, active === 'settings' && { background: 'rgba(180,180,60,0.28)', boxShadow: '0 4px 12px rgba(180,180,60,0.18)' }]}
        aria-label="Settings"
        onClick={() => onNavigate('settings')}
      >
        <AccountCircleIcon />
        {/* <span style={{ color: '#eaf0fa', fontSize: 10 }}>Settings</span> */}
      </button>
    </nav>
  );
};
