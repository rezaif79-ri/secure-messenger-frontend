/** @jsxImportSource @emotion/react */
import { chatStyles } from './Styles';

export const Navbar = () => {
  return (
    <nav css={chatStyles.sidebar}>
      <button css={chatStyles.chatNavButton} aria-label="Chats">
        <span style={{ fontSize: 28 }}>💬</span>
      </button>
      <button css={chatStyles.chatNavButton} aria-label="Contacts">
        <span style={{ fontSize: 24 }}>👤</span>
      </button>
      <div style={{ flex: 1 }} />
      <button css={chatStyles.chatNavButton} aria-label="Settings">
        <span style={{ fontSize: 24 }}>⚙️</span>
      </button>
    </nav>
  );
};
