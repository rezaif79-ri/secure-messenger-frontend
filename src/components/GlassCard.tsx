import styled from '@emotion/styled';

export const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  background: #0084ff;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0073e6;
    transform: translateY(-2px);
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-size: 0.9rem;
  margin: 0;
`;

export const Link = styled.a`
  color: #0084ff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
