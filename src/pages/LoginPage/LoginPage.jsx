import LoginForm from '../../modules/LoginForm/LoginForm';
import {
  AlternateWrapper,
  Button,
  ButtonLink,
  ButtonTitle,
  Divider,
  FormSection,
  GoogleIcon,
  Link,
  LogoIcon,
  PageWrapper,
  Span,
  Text,
  Title,
} from './LoginPage.styled';

const LoginPage = () => {
  return (
    <PageWrapper>
      <FormSection>
        <LogoIcon size={42} />
        <Title>Welcome back</Title>
        <LoginForm />
        <Text>
          Already have an account? <Link to="/auth/register">Register</Link>
        </Text>
        <Divider>
          <Span>or</Span>
        </Divider>
        <AlternateWrapper>
          <Button>
            <ButtonLink href={`${process.env.REACT_APP_API_URL}/api/auth/google`}>
              <GoogleIcon size={22} />
              <ButtonTitle>Continue with Google</ButtonTitle>
            </ButtonLink>
          </Button>
        </AlternateWrapper>
      </FormSection>
    </PageWrapper>
  );
};

export default LoginPage;
