import { MouseEvent } from 'react';

import IconButtonStyled from '../styles/components/IconButton';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps): JSX.Element => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();

    if (onClick) onClick();
  };

  return (
    <IconButtonStyled type="button" onClick={handleClick}>
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
