/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserAvatar } from './UserAvatar';
import { formatLastSeen } from '../../utils/dateUtils';
import type { Contact } from '../../pages/chat/Types';

interface ContactCardProps {
  contact: Contact;
  isSelected?: boolean;
  showLastSeen?: boolean;
  onClick?: (contact: Contact) => void;
  actions?: React.ReactNode;
}

const contactCardStyles = {
  card: css`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.2s;
    color: #eaf0fa;
    &:hover {
      background: rgba(60, 80, 180, 0.18);
    }
  `,
  selected: css`
    background: rgba(60,80,180,0.32);
  `,
  content: css`
    flex: 1;
    min-width: 0;
  `,
  name: css`
    font-weight: 500;
    color: #eaf0fa;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  favoriteIcon: css`
    color: #ffd700;
    font-size: 14px;
  `,
  lastMessage: css`
    font-size: 13px;
    color: #bfc8db;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  lastSeen: css`
    font-size: 11px;
    color: #bfc8db;
    margin-top: 2px;
  `,
  actions: css`
    display: flex;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s;
  `,
  actionsVisible: css`
    opacity: 1;
  `,
  typingIndicator: css`
    color: #4ad66d;
    font-style: italic;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  typingDots: css`
    display: flex;
    gap: 2px;

    span {
      width: 3px;
      height: 3px;
      background: #4ad66d;
      border-radius: 50%;
      animation: typing 1.4s infinite ease-in-out;

      &:nth-of-type(1) { animation-delay: -0.32s; }
      &:nth-of-type(2) { animation-delay: -0.16s; }
    }

    @keyframes typing {
      0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `,
};

export const ContactCard = ({
  contact,
  isSelected = false,
  showLastSeen = false,
  onClick,
  actions
}: ContactCardProps) => {
  const handleClick = () => {
    onClick?.(contact);
  };

  return (
    <div
      css={[contactCardStyles.card, isSelected && contactCardStyles.selected]}
      onClick={handleClick}
    >
      <UserAvatar
        src={contact.avatar}
        name={contact.name}
        online={contact.online}
        showOnlineIndicator
      />

      <div css={contactCardStyles.content}>
        <div css={contactCardStyles.name}>
          {contact.name}
          {contact.isFavorite && (
            <span css={contactCardStyles.favoriteIcon}>★</span>
          )}
        </div>

        {contact.isTyping ? (
          <div css={contactCardStyles.typingIndicator}>
            typing
            <div css={contactCardStyles.typingDots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div css={contactCardStyles.lastMessage}>{contact.lastMessage}</div>
        )}

        {showLastSeen && contact.lastSeen && !contact.online && (
          <div css={contactCardStyles.lastSeen}>
            Last seen {formatLastSeen(contact.lastSeen)}
          </div>
        )}
      </div>

      {actions && (
        <div css={contactCardStyles.actions}>
          {actions}
        </div>
      )}
    </div>
  );
};
