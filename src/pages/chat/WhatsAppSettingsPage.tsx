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
    background: rgba(15, 23, 42, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  `,

  panel: css`
    width: 100%;
    max-width: 1000px;
    height: 90vh;
    background: rgba(30, 41, 59, 0.9);
    backdrop-filter: blur(24px);
    border-radius: 20px;
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(59, 130, 246, 0.1);
    display: flex;
    overflow: hidden;
    border: 1px solid rgba(148, 163, 184, 0.15);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(145deg,
        rgba(59, 130, 246, 0.05) 0%,
        transparent 50%,
        rgba(139, 92, 246, 0.03) 100%
      );
      pointer-events: none;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      height: 95vh;
      border-radius: 16px;
    }
  `,

  sidebar: css`
    width: 340px;
    background: rgba(15, 23, 42, 0.85);
    border-right: 1px solid rgba(148, 163, 184, 0.15);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: linear-gradient(180deg,
        transparent,
        rgba(59, 130, 246, 0.3),
        transparent
      );
    }
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      height: 220px;
      border-right: none;
      border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    }
  `,

  header: css`
    padding: 28px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 28px;
      right: 28px;
      height: 1px;
      background: linear-gradient(90deg,
        transparent,
        rgba(59, 130, 246, 0.3),
        transparent
      );
    }

    h1 {
      color: #F1F5F9;
      font-size: 28px;
      font-weight: 600;
      margin: 0;
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      background: linear-gradient(135deg, #F1F5F9, #94A3B8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `,

  profileSection: css`
    padding: 28px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    position: relative;
  `,

  profileInfo: css`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  `,

  avatar: css`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(59, 130, 246, 0.3);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #3B82F6;
      transform: scale(1.05);
      box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(59, 130, 246, 0.2);
    }
  `,

  profileDetails: css`
    flex: 1;
  `,

  profileName: css`
    color: #F1F5F9;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    text-shadow: 0 0 10px rgba(241, 245, 249, 0.1);
  `,

  profileStatus: css`
    color: #94A3B8;
    font-size: 15px;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  editButton: css`
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    color: #94A3B8;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #60A5FA;
      background: rgba(59, 130, 246, 0.1);
      transform: scale(1.1);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  `,

  editInput: css`
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 8px;
    padding: 8px 12px;
    color: #F1F5F9;
    font-size: 15px;
    outline: none;
    width: 220px;
    transition: all 0.3s ease;

    &:focus {
      border-color: #3B82F6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `,

  menuList: css`
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(59, 130, 246, 0.2) transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(59, 130, 246, 0.2);
      border-radius: 4px;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(59, 130, 246, 0.3);
      }
    }
  `,

  menuItem: css`
    display: flex;
    align-items: center;
    padding: 20px 28px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid rgba(148, 163, 184, 0.05);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg,
        transparent,
        rgba(59, 130, 246, 0.8),
        transparent
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba(51, 65, 85, 0.6);
      backdrop-filter: blur(8px);
      transform: translateX(8px);

      &::before {
        opacity: 1;
      }
    }

    &.active {
      background: rgba(59, 130, 246, 0.15);
      border-left: 4px solid #3B82F6;
    }
  `,

  menuIcon: css`
    width: 24px;
    height: 24px;
    color: #94A3B8;
    margin-right: 20px;
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.2));

    .menu-item:hover & {
      color: #60A5FA;
    }
  `,

  menuText: css`
    color: #F1F5F9;
    font-size: 17px;
    font-weight: 500;
    flex: 1;
  `,

  menuArrow: css`
    color: #94A3B8;
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;

    .menu-item:hover & {
      color: #60A5FA;
      transform: translateX(4px);
    }
  `,

  content: css`
    flex: 1;
    padding: 28px;
    overflow-y: auto;
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(12px);

    @media (max-width: 768px) {
      padding: 20px;
    }
  `,

  contentTitle: css`
    color: #F1F5F9;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 28px;
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  `,

  settingGroup: css`
    margin-bottom: 32px;
    background: rgba(30, 41, 59, 0.6);
    border-radius: 16px;
    overflow: hidden;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(148, 163, 184, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  `,

  settingGroupTitle: css`
    color: #3B82F6;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 20px 24px 16px;
    margin: 0;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
  `,

  settingItem: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-top: 1px solid rgba(148, 163, 184, 0.05);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(51, 65, 85, 0.4);
    }

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
