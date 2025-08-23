/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GlassCard, Input, Button, Title, SubText } from '../../components/GlassCard';
import { AuthLayout } from './AuthLayout';
import { authStyles } from './styles';

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
          <Title>Create your account</Title>

          {/* <div css={authStyles.socialButtons}>
            <Button
              onClick={() => console.log('Google register')}
              style={{ background: '#DB4437' }}
            >
              Google
            </Button>
            <Button
              onClick={() => console.log('GitHub register')}
              style={{ background: '#333' }}
            >
              GitHub
            </Button>
          </div>

          <div css={authStyles.divider}>or register with email</div> */}

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
