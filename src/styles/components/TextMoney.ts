import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;

  font-family: 'Lilita One', sans-serif;

  span:nth-child(1) {
    font-size: 1.8rem;
    /* font-weight: bold; */
  }

  span:nth-child(2) {
    font-size: 4.8rem;
    line-height: 4.8rem;
    font-weight: bold;
  }

  span:nth-child(3) {
    font-size: 1.8rem;
    align-self: flex-end;
  }
`;