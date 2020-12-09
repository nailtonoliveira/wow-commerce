import styled from 'styled-components';
import { lightenDarkenColor } from '../../utils/lightenDarkenColor';

export default styled.button`
  border: none;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #673ab7;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
