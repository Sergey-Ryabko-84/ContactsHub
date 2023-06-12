import { Button } from './NavButton.styled';

const NavButton = ({
  to,
  color = '#fff',
  borderColor = 'transparent',
  bgColor = '#ff6534',
  bgHovColor = '#dd5626',
  bgActvColor = '#ab300b',
  children,
}) => {
  return (
    <Button
      to={to}
      color={color}
      bordercolor={borderColor}
      bgcolor={bgColor}
      bghovcolor={bgHovColor}
      bgactvcolor={bgActvColor}
    >
      {children}
    </Button>
  );
};

export default NavButton;
