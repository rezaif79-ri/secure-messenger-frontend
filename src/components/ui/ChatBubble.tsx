/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { formatMessageTime } from '../../utils/dateUtils';
import { formatFileSize } from '../../utils/helpers';
import type { ChatMessage } from '../../pages/chat/Types';

interface ChatBubbleProps {
  message: ChatMessage;
  isFromCurrentUser: boolean;
  showTimestamp?: boolean;
  onDelete?: (messageId: string) => void;
}

const bubbleStyles = {
  container: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    max-width: 70%;
    word-break: break-word;
    position: relative;

    &:hover .message-actions {
      opacity: 1;
    }

    @media (max-width: 600px) {
      max-width: 90%;
    }
  `,
  fromMe: css`
    align-self: flex-end;
    align-items: flex-end;
  `,
  fromOther: css`
    align-self: flex-start;
    align-items: flex-start;
  `,
  bubble: css`
    padding: 12px 18px;
    border-radius: 16px;
    font-size: 1rem;
    position: relative;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    transition: all 0.2s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(60,80,180,0.15);
    }

    @media (max-width: 600px) {
      font-size: 0.95rem;
      padding: 8px 12px;
      border-radius: 12px;
    }
  `,
  bubbleFromMe: css`
    background: rgba(60, 80, 180, 0.7);
    color: #fff;
    backdrop-filter: blur(4px);
  `,
  bubbleFromOther: css`
    background: rgba(60,80,180,0.18);
    color: #eaf0fa;
  `,
  timestamp: css`
    font-size: 11px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  timestampOther: css`
    color: #bfc8db;
  `,
  status: css`
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 2px;
  `,
  statusIcon: css`
    font-size: 10px;
  `,
  sending: css`
    color: rgba(255, 255, 255, 0.5);
  `,
  sent: css`
    color: rgba(255, 255, 255, 0.7);
  `,
  delivered: css`
    color: #4ad66d;
  `,
  read: css`
    color: #4ad66d;
  `,
  fileMessage: css`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
  `,
  fileIcon: css`
    font-size: 24px;
  `,
  fileInfo: css`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `,
  fileName: css`
    font-weight: 500;
    font-size: 14px;
  `,
  fileSize: css`
    font-size: 12px;
    opacity: 0.8;
  `,
  actions: css`
    position: absolute;
    top: -8px;
    right: -8px;
    opacity: 0;
    transition: opacity 0.2s;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    color: white;
    border: none;

    &:hover {
      background: rgba(255, 0, 0, 0.8);
    }
  `,
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'sending': return '⏳';
    case 'sent': return '✓';
    case 'delivered': return '✓✓';
    case 'read': return '✓✓';
    default: return '';
  }
};

const getFileIcon = (type: string) => {
  switch (type) {
    case 'image': return '🖼️';
    case 'audio': return '🎵';
    case 'file': return '📎';
    default: return '📄';
  }
};

export const ChatBubble = ({
  message,
  isFromCurrentUser,
  showTimestamp = true,
  onDelete
}: ChatBubbleProps) => {
  const handleDelete = () => {
    onDelete?.(message.id);
  };

  const renderMessageContent = () => {
    if (message.type === 'text') {
      return <div>{message.text}</div>;
    }

    return (
      <div css={bubbleStyles.fileMessage}>
        <div css={bubbleStyles.fileIcon}>
          {getFileIcon(message.type)}
        </div>
        <div css={bubbleStyles.fileInfo}>
          <div css={bubbleStyles.fileName}>
            {message.fileName || `${message.type} file`}
          </div>
          {message.fileSize && (
            <div css={bubbleStyles.fileSize}>
              {formatFileSize(message.fileSize)}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      css={[
        bubbleStyles.container,
        isFromCurrentUser ? bubbleStyles.fromMe : bubbleStyles.fromOther
      ]}
    >
      <div
        css={[
          bubbleStyles.bubble,
          isFromCurrentUser ? bubbleStyles.bubbleFromMe : bubbleStyles.bubbleFromOther
        ]}
      >
        {renderMessageContent()}

        {onDelete && isFromCurrentUser && (
          <button
            css={bubbleStyles.actions}
            className="message-actions"
            onClick={handleDelete}
            aria-label="Delete message"
          >
            ×
          </button>
        )}
      </div>

      {showTimestamp && (
        <div
          css={[
            bubbleStyles.timestamp,
            !isFromCurrentUser && bubbleStyles.timestampOther
          ]}
        >
          <span>{formatMessageTime(message.timestamp)}</span>

          {isFromCurrentUser && (
            <div
              css={[
                bubbleStyles.status,
                bubbleStyles[message.status as keyof typeof bubbleStyles] || bubbleStyles.sent
              ]}
            >
              <span css={bubbleStyles.statusIcon}>
                {getStatusIcon(message.status)}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
