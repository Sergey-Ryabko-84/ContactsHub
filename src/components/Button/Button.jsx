const Button = ({ type = 'submit', children }) => {
  return (
    <button type={type}>
      {children}
    </button>
  );
};

export default Button;
