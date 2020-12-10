import { MouseEvent } from 'react';
import ButtonStyled from '../styles/components/Button';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();

    if (onClick) onClick();
  };

  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
