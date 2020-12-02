import IconButtonStyled from '../styles/components/IconButton';

interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children }: IconButtonProps): JSX.Element => {
  return <IconButtonStyled type="button">{children}</IconButtonStyled>;
};

export default IconButton;
