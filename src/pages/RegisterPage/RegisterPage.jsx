import RegisterForm from '../../modules/RegisterForm/RegisterForm';
import {
  AlternateWrapper,
  Button,
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
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <PageWrapper>
      <FormSection>
        <LogoIcon size={42} />
        <Title>Create your account</Title>
        <RegisterForm />
        <Text>
          Already have an account? <Link to="/auth/login">Log in</Link>
        </Text>
        <Divider>
          <Span>or</Span>
        </Divider>
        <AlternateWrapper>
          <Button>
            <a href={`${process.env.REACT_APP_API_URL}/api/auth/google`}>
              <GoogleIcon size={22} />
              <ButtonTitle>Continue with Google</ButtonTitle>
            </a>
          </Button>
        </AlternateWrapper>
      </FormSection>
    </PageWrapper>
  );
};

export default RegisterPage;
