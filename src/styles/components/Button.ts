import styled from 'styled-components';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';

export default styled.button`
  height: 40px;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.8rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);

  color: white;
  background-color: #673ab7;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;

  transition: background-color 0.5s;

  &:hover {
    background-color: ${lightenDarkenColor('#673ab7', 10)};
  }

  &:active {
    background-color: ${lightenDarkenColor('#673ab7', -30)};
  }
`;
