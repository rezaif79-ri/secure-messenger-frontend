/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { debounce } from '../../utils/helpers';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  onTyping?: (isTyping: boolean) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

const inputStyles = {
  container: css`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    padding: 16px 24px;
    background: rgba(40, 44, 60, 0.8);
    border-top: 1px solid rgba(60,80,180,0.12);
    backdrop-filter: blur(10px);

    @media (max-width: 600px) {
      padding: 12px 16px;
      gap: 8px;
    }
  `,
  inputWrapper: css`
    flex: 1;
    position: relative;
  `,
  textarea: css`
    width: 100%;
    min-height: 44px;
    max-height: 120px;
    padding: 12px 16px;
    border: none;
    border-radius: 22px;
    background: rgba(60,80,180,0.08);
    color: #eaf0fa;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    resize: none;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    transition: all 0.2s;

    &:focus {
      background: rgba(60,80,180,0.18);
      box-shadow: 0 4px 12px rgba(60,80,180,0.15);
    }

    &::placeholder {
      color: #bfc8db;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 600px) {
      font-size: 0.95rem;
      padding: 10px 14px;
    }
  `,
  sendButton: css`
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(90deg, #3a4ad6 0%, #5a6cfb 100%);
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(60,80,180,0.20);

    &:hover:not(:disabled) {
      background: linear-gradient(90deg, #5a6cfb 0%, #3a4ad6 100%);
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(60,80,180,0.30);
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  `,
  characterCount: css`
    position: absolute;
    bottom: -20px;
    right: 8px;
    font-size: 11px;
    color: #bfc8db;
  `,
  characterCountWarning: css`
    color: #ff6b6b;
  `,
  attachButton: css`
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: rgba(60,80,180,0.18);
    color: #eaf0fa;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: rgba(60,80,180,0.28);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  `,
};

export const MessageInput = ({
  onSendMessage,
  onTyping,
  placeholder = "Type a message...",
  disabled = false,
  maxLength = 1000
}: MessageInputProps) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Debounced typing indicator
  const debouncedStopTyping = debounce(() => {
    setIsTyping(false);
    onTyping?.(false);
  }, 2000);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    // Enforce max length
    if (value.length > maxLength) return;

    setMessage(value);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    // Handle typing indicator
    if (value.trim() && !isTyping) {
      setIsTyping(true);
      onTyping?.(true);
    }

    if (value.trim()) {
      debouncedStopTyping();
    } else {
      setIsTyping(false);
      onTyping?.(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || disabled) return;

    onSendMessage(trimmedMessage);
    setMessage('');
    setIsTyping(false);
    onTyping?.(false);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleAttach = () => {
    // TODO: Implement file attachment
    console.log('File attachment clicked');
  };

  const canSend = message.trim().length > 0 && !disabled;
  const isNearLimit = message.length > maxLength * 0.8;

  return (
    <div css={inputStyles.container}>
      <button
        css={inputStyles.attachButton}
        onClick={handleAttach}
        disabled={disabled}
        aria-label="Attach file"
      >
        📎
      </button>

      <div css={inputStyles.inputWrapper}>
        <textarea
          ref={textareaRef}
          css={inputStyles.textarea}
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
        />

        {maxLength && (
          <div css={[
            inputStyles.characterCount,
            isNearLimit && inputStyles.characterCountWarning
          ]}>
            {message.length}/{maxLength}
          </div>
        )}
      </div>

      <button
        css={inputStyles.sendButton}
        onClick={handleSend}
        disabled={!canSend}
        aria-label="Send message"
      >
        ➤
      </button>
    </div>
  );
};
