import { css } from '@emotion/react';

export const chatStyles = {
  pendingRequestsSection: css`
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgba(60,80,180,0.10);
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(60,80,180,0.08);
    padding: 18px 16px;
  `,
  pendingRequestsTitle: css`
    font-size: 1.05rem;
    font-weight: 600;
    color: #eaf0fa;
    margin-bottom: 8px;
  `,
  pendingRequestsList: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  `,
  pendingRequestItem: css`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(60,80,180,0.08);
    box-shadow: 0 2px 8px rgba(60,80,180,0.06);
    transition: background 0.2s;
    &:hover {
      background: rgba(60,80,180,0.16);
    }
  `,
  contactActionBtn: css`
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: rgba(60,80,180,0.14);
    color: #eaf0fa;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    transition: background 0.2s;
    &:hover {
      background: rgba(60,80,180,0.28);
    }
  `,
  modalOverlay: css`
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
  `,
  modalCard: css`
    min-width: 320px;
    max-width: 380px;
    background: rgba(40,44,60,0.95);
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(60,80,180,0.18);
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    color: #eaf0fa;
  `,
  contactListSection: css`
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  contactListTitle: css`
    font-size: 1.1rem;
    font-weight: 600;
    color: #eaf0fa;
    margin-bottom: 8px;
  `,
  contactList: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-height: 260px;
    overflow-y: auto;
  `,
  contactListItem: css`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(60,80,180,0.10);
    box-shadow: 0 2px 8px rgba(60,80,180,0.08);
    transition: background 0.2s;
    cursor: pointer;
    &:hover {
      background: rgba(60,80,180,0.18);
    }
  `,
  contactListAvatar: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
  `,
  contactListName: css`
    font-weight: 500;
    color: #eaf0fa;
    font-size: 1rem;
  `,
  contactListLastMessage: css`
    font-size: 0.95rem;
    color: #bfc8db;
  `,
  contactListStatus: css`
    margin-left: auto;
    font-size: 0.95rem;
    color: #4ad66d;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 8px;
    background: rgba(60,180,80,0.10);
    &.offline {
      color: #ff6b6b;
      background: rgba(180,60,60,0.10);
    }
  `,
  addContactHeader: css`
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 18px;
    width: 100%;
  `,
  addContactIcon: css`
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    background: rgba(60,80,180,0.12);
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    color: #eaf0fa;
  `,
  addContactHeaderText: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  addContactHeaderTitle: css`
    font-size: 1.3rem;
    font-weight: 600;
    color: #eaf0fa;
  `,
  addContactHeaderDesc: css`
    font-size: 1rem;
    color: #bfc8db;
  `,
  addContactContainer: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(24, 28, 36, 0.85);
    backdrop-filter: blur(12px);
  `,
  addContactCard: css`
    width: 100%;
    max-width: 520px;
    min-width: 320px;
    padding: 32px 28px;
    border-radius: 24px;
    background: rgba(40, 44, 60, 0.85);
    box-shadow: 0 8px 32px rgba(60,80,180,0.18);
    backdrop-filter: blur(16px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    @media (max-width: 600px) {
      max-width: 98vw;
      min-width: 0;
      padding: 18px 8px;
      border-radius: 16px;
      gap: 12px;
    }
  `,
  addContactTitle: css`
    font-size: 1.7rem;
    font-weight: 600;
    color: #eaf0fa;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  `,
  addContactForm: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  `,
  addContactInput: css`
    padding: 12px 16px;
    border-radius: 10px;
    border: none;
    background: rgba(60,80,180,0.08);
    color: #eaf0fa;
    font-size: 1rem;
    outline: none;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    transition: background 0.2s;
    &:focus {
      background: rgba(60,80,180,0.18);
    }
  `,
  addContactButton: css`
    padding: 12px 0;
    border-radius: 10px;
    border: none;
    background: linear-gradient(90deg, #3a4ad6 0%, #5a6cfb 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    transition: background 0.2s;
    &:hover {
      background: linear-gradient(90deg, #5a6cfb 0%, #3a4ad6 100%);
    }
  `,
  addContactError: css`
    color: #ff6b6b;
    font-size: 0.95rem;
    margin-top: 6px;
  `,
  addContactSuccess: css`
    color: #4ad66d;
    font-size: 0.95rem;
    margin-top: 6px;
  `,
  chatNavButton: css`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: transparent;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
    border: none;
    outline: none;
    color: inherit;
    font-size: 24px;
    &:hover {
      background: rgba(60,80,180,0.18);
      box-shadow: 0 2px 8px rgba(60, 80, 180, 0.7);;
    }
    &:active {
      background: rgba(60,80,180,0.28);
      box-shadow: 0 4px 12px rgba(60,80,180,0.18);
    }
  `,
  container: css`
    display: flex;
    height: 100vh;
    max-width: 100vw;
    width: 100vw;
    background: linear-gradient(135deg, #181c24 0%, #23283a 100%);
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #eaf0fa;
  `,
  sidebar: css`
    width: 70px;
    background: rgba(24, 28, 36, 0.85);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    gap: 24px;
    color: #eaf0fa;
    border-right: 1px solid rgba(60,80,180,0.12);
  `,
  contacts: css`
    width: 280px;
    background: rgba(32, 36, 48, 0.7);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(60,80,180,0.12);
    padding: 24px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
  `,
  chat: css`
    flex: 1;
    background: rgba(36, 40, 56, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    padding: 32px 24px;
    overflow-y: auto;
    color: #eaf0fa;
  `,
  details: css`
    width: 320px;
    min-width: 320px;
    background: rgba(40, 44, 60, 0.8);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(60,80,180,0.12);
    padding: 24px;
    box-shadow: -2px 0 8px rgba(0,0,0,0.08);
    position: relative;
    z-index: 2;
    color: #eaf0fa;
    transform: translateX(0);
    transition: transform 0.35s cubic-bezier(.4,0,.2,1);
    will-change: transform;
  `,
  detailsClosed: css`
    width: 320px;
    min-width: 320px;
    background: rgba(40, 44, 60, 0.8);
    box-shadow: -2px 0 8px rgba(0,0,0,0.08);
    border-left: 1px solid rgba(60,80,180,0.12);
    color: #eaf0fa;
    position: relative;
    z-index: 2;
    transform: translateX(320px);
    transition: transform 0.35s cubic-bezier(.4,0,.2,1);
    will-change: transform;
  `,
  contactCard: css`
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
  avatar: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    background: #23283a;
    border: 2px solid rgba(60,80,180,0.18);
  `,
  chatBubble: css`
    background: rgba(255,255,255,0.08);
    border-radius: 18px;
    padding: 12px 20px;
    margin-bottom: 12px;
    max-width: 60%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-size: 1rem;
    color: #eaf0fa;
    align-self: flex-start;
    backdrop-filter: blur(4px);
  `,
  chatBubbleMe: css`
    background: rgba(60, 80, 180, 0.7);
    color: #fff;
    align-self: flex-end;
    backdrop-filter: blur(4px);
  `,
  chatCards: css`
    display: flex;
    gap: 24px;
    margin-top: 24px;
  `,
  chatCard: css`
    background: rgba(255,255,255,0.08);
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    width: 220px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    color: #eaf0fa;
    backdrop-filter: blur(4px);
  `,
  chatCardImg: css`
    width: 100%;
    height: 120px;
    object-fit: cover;
    filter: brightness(0.85);
  `,
  chatCardTitle: css`
    font-weight: 600;
    font-size: 1.1rem;
    margin: 12px 0 4px 0;
    padding: 0 16px;
    color: #eaf0fa;
  `,
  chatCardDesc: css`
    font-size: 0.95rem;
    color: #bfc8db;
    padding: 0 16px 12px 16px;
  `,
  closeBtn: css`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #bfc8db;
    z-index: 3;
    transition: color 0.2s;
    &:hover {
      color: #eaf0fa;
    }
  `,
};
