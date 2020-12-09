import styled from 'styled-components';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';

export default styled.button`
  border: none;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: #673ab7;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${lightenDarkenColor('#673ab7', 30)};
  }

  &:active {
    background-color: ${lightenDarkenColor('#673ab7', -30)};
  }
`;
