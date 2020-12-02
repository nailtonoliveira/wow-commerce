import ButtonStyled from '../styles/components/Button';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => (
  <ButtonStyled type="button">{children}</ButtonStyled>
);

export default Button;
