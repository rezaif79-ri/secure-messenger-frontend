import { css } from '@emotion/react';

export const chatStyles = {
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
