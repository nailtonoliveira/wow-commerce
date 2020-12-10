import MainWrapperStyled from '../styles/components/MainWrapper';

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps): JSX.Element => (
  <MainWrapperStyled>{children}</MainWrapperStyled>
);

export default MainWrapper;
