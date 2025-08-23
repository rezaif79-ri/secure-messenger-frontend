/** @jsxImportSource @emotion/react */
import { chatStyles } from './Styles';

export const Navbar = () => {
  return (
    <nav css={chatStyles.sidebar}>
      <div>
        <span style={{ fontSize: 28 }}>💬</span>
      </div>
      <div>
        <span style={{ fontSize: 24 }}>👤</span>
      </div>
      <div style={{ flex: 1 }} />
      <div>
        <span style={{ fontSize: 24 }}>⚙️</span>
      </div>
    </nav>
  );
};
