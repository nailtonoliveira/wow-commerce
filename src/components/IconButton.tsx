interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children }: IconButtonProps): JSX.Element => {
  return <button type="button">{children}</button>;
};

export default IconButton;
