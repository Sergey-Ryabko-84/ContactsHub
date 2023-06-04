import { Submit } from "./Button.styled";

const Button = ({ type = 'submit', children }) => {
  return (
    <Submit type={type}>
      {children}
    </Submit>
  );
};

export default Button;
