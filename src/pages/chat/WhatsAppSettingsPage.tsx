/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  ChatBubble as ChatIcon,
  Palette as ThemeIcon,
  Language as LanguageIcon,
  Help as HelpIcon,
  Info as AboutIcon,
  ChevronRight as ChevronRightIcon,
  Edit as EditIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

const settingsStyles = {
  container: css`
    width: 100%;
    height: 100vh;
    background: rgba(18, 30, 40, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `,

  panel: css`
    width: 100%;
    max-width: 900px;
    height: 90vh;
    background: rgba(42, 58, 65, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    display: flex;
    overflow: hidden;

    @media (max-width: 768px) {
      flex-direction: column;
      height: 95vh;
      border-radius: 12px;
    }
  `,

  sidebar: css`
    width: 320px;
    background: rgba(32, 44, 51, 0.85);
    border-right: 1px solid rgba(134, 150, 160, 0.15);
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      height: 200px;
      border-right: none;
      border-bottom: 1px solid rgba(134, 150, 160, 0.15);
    }
  `,

  header: css`
    padding: 20px 24px;
    border-bottom: 1px solid rgba(134, 150, 160, 0.15);

    h1 {
      color: #E9EDEF;
      font-size: 24px;
      font-weight: 500;
      margin: 0;
    }
  `,

  profileSection: css`
    padding: 20px 24px;
    border-bottom: 1px solid rgba(134, 150, 160, 0.1);
  `,

  profileInfo: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  `,

  avatar: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(0, 168, 132, 0.3);
    cursor: pointer;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: #00A884;
    }
  `,

  profileDetails: css`
    flex: 1;
  `,

  profileName: css`
    color: #E9EDEF;
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 4px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  profileStatus: css`
    color: #8696A0;
    font-size: 14px;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  editButton: css`
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    color: #8696A0;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      color: #00A884;
      background: rgba(0, 168, 132, 0.1);
    }

    svg {
      width: 16px;
      height: 16px;
    }
  `,

  editInput: css`
    background: rgba(18, 30, 40, 0.7);
    border: 1px solid rgba(0, 168, 132, 0.3);
    border-radius: 6px;
    padding: 4px 8px;
    color: #E9EDEF;
    font-size: 14px;
    outline: none;
    width: 200px;

    &:focus {
      border-color: #00A884;
    }
  `,

  menuList: css`
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(134, 150, 160, 0.15) transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(134, 150, 160, 0.15);
      border-radius: 3px;
    }
  `,

  menuItem: css`
    display: flex;
    align-items: center;
    padding: 16px 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: 1px solid rgba(134, 150, 160, 0.05);

    &:hover {
      background: rgba(45, 55, 62, 0.5);
    }

    &.active {
      background: rgba(0, 168, 132, 0.1);
      border-left: 3px solid #00A884;
    }
  `,

  menuIcon: css`
    width: 20px;
    height: 20px;
    color: #8696A0;
    margin-right: 16px;
  `,

  menuText: css`
    color: #E9EDEF;
    font-size: 16px;
    flex: 1;
  `,

  menuArrow: css`
    color: #8696A0;
    width: 16px;
    height: 16px;
  `,

  content: css`
    flex: 1;
    padding: 20px 24px;
    overflow-y: auto;

    @media (max-width: 768px) {
      padding: 16px 20px;
    }
  `,

  contentTitle: css`
    color: #E9EDEF;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  `,

  settingGroup: css`
    margin-bottom: 24px;
    background: rgba(32, 44, 51, 0.5);
    border-radius: 12px;
    overflow: hidden;
  `,

  settingGroupTitle: css`
    color: #00A884;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 16px 20px 12px;
    margin: 0;
  `,

  settingItem: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    border-top: 1px solid rgba(134, 150, 160, 0.05);

    &:first-of-type {
      border-top: none;
    }
  `,

  settingLabel: css`
    color: #E9EDEF;
    font-size: 16px;
  `,

  settingDescription: css`
    color: #8696A0;
    font-size: 14px;
    margin-top: 4px;
  `,

  toggle: css`
    position: relative;
    width: 44px;
    height: 24px;
    background: rgba(134, 150, 160, 0.3);
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s ease;

    &.active {
      background: #00A884;
    }

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      transition: transform 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &.active::after {
      transform: translateX(20px);
    }
  `,

  select: css`
    background: rgba(18, 30, 40, 0.7);
    border: 1px solid rgba(134, 150, 160, 0.2);
    border-radius: 6px;
    padding: 8px 12px;
    color: #E9EDEF;
    font-size: 14px;
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: #00A884;
    }
  `,
};

interface SettingsState {
  notifications: boolean;
  sounds: boolean;
  readReceipts: boolean;
  lastSeen: string;
  theme: string;
  language: string;
  enterToSend: boolean;
}

const menuItems = [
  { id: 'profile', label: 'Profile', icon: PersonIcon },
  { id: 'notifications', label: 'Notifications', icon: NotificationsIcon },
  { id: 'privacy', label: 'Privacy & Security', icon: SecurityIcon },
  { id: 'chats', label: 'Chats', icon: ChatIcon },
  { id: 'appearance', label: 'Appearance', icon: ThemeIcon },
  { id: 'language', label: 'Language', icon: LanguageIcon },
  { id: 'help', label: 'Help', icon: HelpIcon },
  { id: 'about', label: 'About', icon: AboutIcon },
];

export const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [editingName, setEditingName] = useState(false);
  const [editingStatus, setEditingStatus] = useState(false);
  const [profileName, setProfileName] = useState('Your Name');
  const [profileStatus, setProfileStatus] = useState('Available');

  const [settings, setSettings] = useState<SettingsState>({
    notifications: true,
    sounds: true,
    readReceipts: true,
    lastSeen: 'everyone',
    theme: 'dark',
    language: 'english',
    enterToSend: true,
  });

  const handleSettingChange = (key: keyof SettingsState, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div>
            <h2 css={settingsStyles.contentTitle}>Profile</h2>

            <div css={settingsStyles.settingGroup}>
              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Name</div>
                  {editingName ? (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                      <input
                        css={settingsStyles.editInput}
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        onBlur={() => setEditingName(false)}
                        autoFocus
                      />
                      <button css={settingsStyles.editButton} onClick={() => setEditingName(false)}>
                        <CheckIcon />
                      </button>
                    </div>
                  ) : (
                    <div css={settingsStyles.settingDescription}>{profileName}</div>
                  )}
                </div>
                {!editingName && (
                  <button css={settingsStyles.editButton} onClick={() => setEditingName(true)}>
                    <EditIcon />
                  </button>
                )}
              </div>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>About</div>
                  {editingStatus ? (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                      <input
                        css={settingsStyles.editInput}
                        value={profileStatus}
                        onChange={(e) => setProfileStatus(e.target.value)}
                        onBlur={() => setEditingStatus(false)}
                        autoFocus
                      />
                      <button css={settingsStyles.editButton} onClick={() => setEditingStatus(false)}>
                        <CheckIcon />
                      </button>
                    </div>
                  ) : (
                    <div css={settingsStyles.settingDescription}>{profileStatus}</div>
                  )}
                </div>
                {!editingStatus && (
                  <button css={settingsStyles.editButton} onClick={() => setEditingStatus(true)}>
                    <EditIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div>
            <h2 css={settingsStyles.contentTitle}>Notifications</h2>

            <div css={settingsStyles.settingGroup}>
              <h3 css={settingsStyles.settingGroupTitle}>Desktop Notifications</h3>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Enable Notifications</div>
                  <div css={settingsStyles.settingDescription}>Show desktop notifications for new messages</div>
                </div>
                <div
                  css={[settingsStyles.toggle, settings.notifications && 'active']}
                  onClick={() => handleSettingChange('notifications', !settings.notifications)}
                />
              </div>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Sound Notifications</div>
                  <div css={settingsStyles.settingDescription}>Play notification sounds</div>
                </div>
                <div
                  css={[settingsStyles.toggle, settings.sounds && 'active']}
                  onClick={() => handleSettingChange('sounds', !settings.sounds)}
                />
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div>
            <h2 css={settingsStyles.contentTitle}>Privacy & Security</h2>

            <div css={settingsStyles.settingGroup}>
              <h3 css={settingsStyles.settingGroupTitle}>Privacy Settings</h3>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Last Seen</div>
                  <div css={settingsStyles.settingDescription}>Who can see when you were last online</div>
                </div>
                <select
                  css={settingsStyles.select}
                  value={settings.lastSeen}
                  onChange={(e) => handleSettingChange('lastSeen', e.target.value)}
                >
                  <option value="everyone">Everyone</option>
                  <option value="contacts">My Contacts</option>
                  <option value="nobody">Nobody</option>
                </select>
              </div>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Read Receipts</div>
                  <div css={settingsStyles.settingDescription}>Send read receipts for messages</div>
                </div>
                <div
                  css={[settingsStyles.toggle, settings.readReceipts && 'active']}
                  onClick={() => handleSettingChange('readReceipts', !settings.readReceipts)}
                />
              </div>
            </div>
          </div>
        );

      case 'chats':
        return (
          <div>
            <h2 css={settingsStyles.contentTitle}>Chat Settings</h2>

            <div css={settingsStyles.settingGroup}>
              <h3 css={settingsStyles.settingGroupTitle}>Message Behavior</h3>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Enter to Send</div>
                  <div css={settingsStyles.settingDescription}>Press Enter to send messages (Shift+Enter for new line)</div>
                </div>
                <div
                  css={[settingsStyles.toggle, settings.enterToSend && 'active']}
                  onClick={() => handleSettingChange('enterToSend', !settings.enterToSend)}
                />
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div>
            <h2 css={settingsStyles.contentTitle}>Appearance</h2>

            <div css={settingsStyles.settingGroup}>
              <h3 css={settingsStyles.settingGroupTitle}>Theme</h3>

              <div css={settingsStyles.settingItem}>
                <div>
                  <div css={settingsStyles.settingLabel}>Theme</div>
                  <div css={settingsStyles.settingDescription}>Choose your preferred theme</div>
                </div>
                <select
                  css={settingsStyles.select}
                  value={settings.theme}
                  onChange={(e) => handleSettingChange('theme', e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">System</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h2 css={settingsStyles.contentTitle}>{activeSection}</h2>
            <p style={{ color: '#8696A0' }}>Settings for {activeSection} coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div css={settingsStyles.container}>
      <div css={settingsStyles.panel}>
        <div css={settingsStyles.sidebar}>
          <div css={settingsStyles.header}>
            <h1>Settings</h1>
          </div>

          <div css={settingsStyles.profileSection}>
            <div css={settingsStyles.profileInfo}>
              <img
                css={settingsStyles.avatar}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
              />
              <div css={settingsStyles.profileDetails}>
                <div css={settingsStyles.profileName}>
                  {profileName}
                </div>
                <div css={settingsStyles.profileStatus}>
                  {profileStatus}
                </div>
              </div>
            </div>
          </div>

          <div css={settingsStyles.menuList}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  css={[settingsStyles.menuItem, activeSection === item.id && 'active']}
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon css={settingsStyles.menuIcon} />
                  <span css={settingsStyles.menuText}>{item.label}</span>
                  <ChevronRightIcon css={settingsStyles.menuArrow} />
                </div>
              );
            })}
          </div>
        </div>

        <div css={settingsStyles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
