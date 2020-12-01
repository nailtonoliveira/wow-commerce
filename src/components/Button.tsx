interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => (
  <button type="button">{children}</button>
);

export default Button;
