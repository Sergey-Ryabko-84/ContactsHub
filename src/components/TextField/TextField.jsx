import { Input, InputWrapper } from "./TextField.styled";

const TextField = ({ ...props }) => {
  return (
    <InputWrapper>
      <Input {...props} />
    </InputWrapper>
  );
};

export default TextField;
