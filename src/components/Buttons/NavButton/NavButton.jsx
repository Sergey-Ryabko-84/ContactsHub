import { Button } from './NavButton.styled';

const NavButton = ({ to, children }) => {
  return <Button to={to}>{children}</Button>;
};

export default NavButton;
