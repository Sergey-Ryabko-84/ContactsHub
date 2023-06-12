import { useLocation, useNavigate } from 'react-router-dom';
import NavButton from '../../components/Buttons/NavButton/NavButton';
import { LuMailCheck } from 'react-icons/lu';
import {
  Anchor,
  IconWrapper,
  Link,
  LinkWrapper,
  LogoIcon,
  LogoWrapper,
  PageWrapper,
  Section,
  Text,
  Title,
} from './CheckEmailPage.styled';
import { useEffect } from 'react';

const CheckEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate('/auth/login');
    }
  }, [email, navigate]);

  return (
    <PageWrapper>
      <Section>
        <LogoWrapper>
          <LogoIcon size={42} />
        </LogoWrapper>
        <IconWrapper>
          <LuMailCheck size={42} color="#ff6534" />
        </IconWrapper>
        <Title>
          Check
          <Anchor href={`https:${email}`} target="_blank">
            Your Email
          </Anchor>
        </Title>
        <Text>
          {`Please check your email ${email} for a message containing your new password.`}
        </Text>
        <LinkWrapper>
          <NavButton
            to="/auth/reset-password"
            color="auto"
            borderColor="#c9c9c9"
            bgColor="transparent"
            bgHovColor="#ffe3dc"
            bgActvColor="#ffbaa8"
          >
            Resend email
          </NavButton>
        </LinkWrapper>
        <Link to="/auth/login">Back to Login</Link>
      </Section>
    </PageWrapper>
  );
};

export default CheckEmailPage;
