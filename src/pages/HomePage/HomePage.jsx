import { TiContacts } from 'react-icons/ti';
import NavButton from '../../components/Buttons/NavButton/NavButton';
import { LinkWrapper, PageWrapper, Section, Text, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <PageWrapper>
      <Section>
        <TiContacts size={54} />
        <Title>Welcome to Contacts Book</Title>
        <Text>Log in with your account to continue</Text>
        <LinkWrapper>
          <NavButton to="/auth/register">Register</NavButton>
          <NavButton to="/auth/login">Log in</NavButton>
        </LinkWrapper>
      </Section>
    </PageWrapper>
  );
};

export default HomePage;
