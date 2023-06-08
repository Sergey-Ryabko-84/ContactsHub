import { Submit } from "./Button.styled";

const Button = ({ type = 'submit', disabled = false, children }) => {
  return (
    <Submit type={type} disabled={disabled}>
      {children}
    </Submit>
  );
};

export default Button;
