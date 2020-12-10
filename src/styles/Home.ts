import styled from 'styled-components';

export const Container = styled.div`
  grid-area: content;

  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 1.6rem;
  align-content: start;

  @media (max-width: 1081px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @media (max-width: 901px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 601px) {
    grid-template-columns: 1fr;
  }
`;

export const CardProduct = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;

    cursor: pointer;
  }

  & > div {
    display: flex;
    padding: 0.8rem 1.6rem 1.6rem;
    flex-direction: column;
    justify-content: space-between;

    a {
      width: 100%;
      white-space: pre;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
      color: #000;

      cursor: pointer;
      text-decoration: none;
    }

    div:last-child {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
