/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlassCard, Input, Button, Title, SubText } from '../../components/GlassCard';
import { AuthLayout } from './AuthLayout';
import { authStyles } from './styles';
import secureMessengerLogo from '../../assets/secure-messenger-logo.png';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      // Handle login logic here
      console.log('Login:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <GlassCard>
        <div css={authStyles.formContainer}>

          <Title>Connect with your favorite people</Title>
          <img
            src={secureMessengerLogo}
            alt="Secure Messenger Logo"
            css={{
              display: 'block',
              margin: '0 auto 0 auto',
              width: '10em',
              height: '10em',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 16px rgba(0,0,0,0.15))',
            }}
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Logging in...' : 'Continue'}
          </Button>

          <SubText>
            Not registered yet?{' '}
            <RouterLink to="/register" css={authStyles.linkStyle}>
              Create an account
            </RouterLink>
          </SubText>
          <SubText>
            <RouterLink to="/forgot-password" css={authStyles.linkStyle}>
              Forgot password?
            </RouterLink>
          </SubText>
        </div>
      </GlassCard>
    </AuthLayout>
  );
};
