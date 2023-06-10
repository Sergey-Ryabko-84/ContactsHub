import { Submit } from './Button.styled';

const Button = ({
  type = 'submit',
  disabled = false,
  width = '100%',
  height = '52px',
  children,
}) => {
  return (
    <Submit type={type} disabled={disabled} width={width} height={height}>
      {children}
    </Submit>
  );
};

export default Button;
