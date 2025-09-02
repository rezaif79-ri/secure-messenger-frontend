/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getInitials } from '../../utils/helpers';

interface UserAvatarProps {
  src?: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
  online?: boolean;
  showOnlineIndicator?: boolean;
}

const avatarStyles = {
  container: css`
    position: relative;
    display: inline-block;
  `,
  avatar: css`
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(60,80,180,0.18);
    background: linear-gradient(135deg, #3a4ad6 0%, #5a6cfb 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
  `,
  small: css`
    width: 32px;
    height: 32px;
    font-size: 12px;
  `,
  medium: css`
    width: 40px;
    height: 40px;
    font-size: 14px;
  `,
  large: css`
    width: 64px;
    height: 64px;
    font-size: 20px;
  `,
  onlineIndicator: css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background: #4ad66d;
    border: 2px solid rgba(36, 40, 56, 0.9);
    border-radius: 50%;
  `,
  onlineIndicatorSmall: css`
    width: 8px;
    height: 8px;
    border: 1px solid rgba(36, 40, 56, 0.9);
  `,
  offlineIndicator: css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background: #bfc8db;
    border: 2px solid rgba(36, 40, 56, 0.9);
    border-radius: 50%;
  `,
};

export const UserAvatar = ({
  src,
  name,
  size = 'medium',
  online,
  showOnlineIndicator = false
}: UserAvatarProps) => {
  const sizeStyle = size === 'small' ? avatarStyles.small :
                   size === 'large' ? avatarStyles.large :
                   avatarStyles.medium;

  return (
    <div css={avatarStyles.container}>
      {src ? (
        <img
          src={src}
          alt={name}
          css={[avatarStyles.avatar, sizeStyle]}
        />
      ) : (
        <div css={[avatarStyles.avatar, sizeStyle]}>
          {getInitials(name)}
        </div>
      )}

      {showOnlineIndicator && (
        <div
          css={[
            online ? avatarStyles.onlineIndicator : avatarStyles.offlineIndicator,
            size === 'small' && avatarStyles.onlineIndicatorSmall
          ]}
        />
      )}
    </div>
  );
};
