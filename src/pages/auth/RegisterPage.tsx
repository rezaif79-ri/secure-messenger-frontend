/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GlassCard, Input, Button, Title, SubText } from '../../components/GlassCard';
import { AuthLayout } from './AuthLayout';
import { authStyles } from './styles';
import secureMessengerLogo from '../../assets/secure-messenger-logo.png';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      // Handle register logic here
      console.log('Register:', { email, username, password });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <GlassCard>
        <div css={authStyles.formContainer}>

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
          <Title>Create your account</Title>

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleRegister}
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>
          <SubText>
            Already have an account?{' '}
            <RouterLink to="/login" css={authStyles.linkStyle}>
              Login here
            </RouterLink>
          </SubText>
        </div>
      </GlassCard>
    </AuthLayout>
  );
};
