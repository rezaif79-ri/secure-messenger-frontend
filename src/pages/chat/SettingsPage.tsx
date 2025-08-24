/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { chatStyles } from './Styles';

const user = {
  username: 'john_doe',
  email: 'john.doe@example.com',
  displayName: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

export const SettingsPage = () => {
  const [profileOpen, setProfileOpen] = useState(true);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [avatar, setAvatar] = useState(user.avatar);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [editPassword, setEditPassword] = useState(false);

  return (
    <div css={chatStyles.settingsContainer}>
      <div css={chatStyles.settingsCard}>
        {/* Accordion: User Profile */}
        <div css={chatStyles.accordionSection}>
          <button css={chatStyles.accordionHeader} onClick={() => setProfileOpen(o => !o)}>
            <span>User Profile</span>
            <span>{profileOpen ? '▲' : '▼'}</span>
          </button>
          {profileOpen && (
            <div css={chatStyles.accordionContent}>
              <div css={chatStyles.profileRow}>
                <img src={avatar} alt="Profile" css={chatStyles.profileAvatar} />
                <div>
                  <div css={chatStyles.profileLabel}>Username</div>
                  <div css={chatStyles.profileValue}>{user.username}</div>
                  <div css={chatStyles.profileLabel}>Email</div>
                  <div css={chatStyles.profileValue}>{user.email}</div>
                </div>
              </div>
              <div css={chatStyles.profileEditRow}>
                <label css={chatStyles.profileLabel}>Display Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                  css={chatStyles.profileInput}
                />
              </div>
              <div css={chatStyles.profileEditRow}>
                <label css={chatStyles.profileLabel}>Profile Picture</label>
                <input
                  type="text"
                  value={avatar}
                  onChange={e => setAvatar(e.target.value)}
                  css={chatStyles.profileInput}
                  placeholder="Paste image URL"
                />
              </div>
              <div css={chatStyles.profileEditRow}>
                <button css={chatStyles.profileActionBtn} onClick={() => setEditPassword(e => !e)}>
                  {editPassword ? 'Cancel Edit Password' : 'Edit Password'}
                </button>
              </div>
              {editPassword && (
                <div css={chatStyles.profileEditRow}>
                  <label css={chatStyles.profileLabel}>New Password</label>
                  <input type="password" css={chatStyles.profileInput} />
                  <button css={chatStyles.profileActionBtn}>Save Password</button>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Accordion: User Preferences */}
        <div css={chatStyles.accordionSection}>
          <button css={chatStyles.accordionHeader} onClick={() => setPrefsOpen(o => !o)}>
            <span>User Preferences</span>
            <span>{prefsOpen ? '▲' : '▼'}</span>
          </button>
          {prefsOpen && (
            <div css={chatStyles.accordionContent}>
              <div css={chatStyles.profileEditRow}>
                <label css={chatStyles.profileLabel}>Show Online Status</label>
                <input
                  type="checkbox"
                  checked={onlineStatus}
                  onChange={e => setOnlineStatus(e.target.checked)}
                  style={{ marginLeft: 12 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
