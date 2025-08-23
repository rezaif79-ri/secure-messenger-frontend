import { css } from '@emotion/react';

export const authStyles = {
  linkStyle: css`
    color: #0084ff;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  `,

  formContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  socialButtons: css`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  `,

  divider: css`
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 1rem 0;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    &::before {
      margin-right: 1rem;
    }

    &::after {
      margin-left: 1rem;
    }
  `
};
