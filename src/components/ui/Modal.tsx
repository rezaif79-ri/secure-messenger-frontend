/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  showCloseButton?: boolean;
}

const modalStyles = {
  overlay: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(24,28,36,0.45);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.2s ease-out;

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  modal: css`
    background: rgba(40,44,60,0.95);
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(60,80,180,0.18);
    padding: 0;
    display: flex;
    flex-direction: column;
    color: #eaf0fa;
    max-height: 90vh;
    overflow: hidden;
    animation: slideIn 0.3s ease-out;

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @media (max-width: 600px) {
      width: 95vw;
      max-width: 95vw;
      border-radius: 12px;
    }
  `,
  small: css`
    width: 320px;
    min-width: 320px;
  `,
  medium: css`
    width: 480px;
    min-width: 480px;

    @media (max-width: 600px) {
      width: 95vw;
      min-width: 0;
    }
  `,
  large: css`
    width: 720px;
    min-width: 720px;

    @media (max-width: 800px) {
      width: 95vw;
      min-width: 0;
    }
  `,
  header: css`
    padding: 24px 24px 0 24px;
    border-bottom: 1px solid rgba(60,80,180,0.12);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (max-width: 600px) {
      padding: 18px 18px 0 18px;
      margin-bottom: 18px;
    }
  `,
  title: css`
    font-size: 1.3rem;
    font-weight: 600;
    color: #eaf0fa;
    margin: 0;
  `,
  closeButton: css`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #bfc8db;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      color: #eaf0fa;
      background: rgba(60,80,180,0.18);
    }
  `,
  content: css`
    padding: 0 24px 24px 24px;
    overflow-y: auto;
    flex: 1;

    @media (max-width: 600px) {
      padding: 0 18px 18px 18px;
    }
  `,
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true
}: ModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeStyle = size === 'small' ? modalStyles.small :
                   size === 'large' ? modalStyles.large :
                   modalStyles.medium;

  return (
    <div css={modalStyles.overlay} onClick={handleOverlayClick}>
      <div css={[modalStyles.modal, sizeStyle]}>
        {(title || showCloseButton) && (
          <div css={modalStyles.header}>
            {title && <h2 css={modalStyles.title}>{title}</h2>}
            {showCloseButton && (
              <button
                css={modalStyles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}

        <div css={modalStyles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
