import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 6.4rem 100%;
  grid-template-areas:
    'header header header'
    '. content .';
  row-gap: 1.6rem;

  @media (max-width: 900px) {
    grid-template-columns: 10% 80% 10%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1.6rem 1fr 1.6rem;
  }
`;

export const Header = styled.div`
  grid-area: header;

  position: sticky;
  top: 0;

  padding: 0 4.8rem;
  background: #673ab7;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
  }

  input {
    background: transparent;
    border: 2px solid #7e57c2;
    border-radius: 8px;
    min-width: 400px;
    height: 40px;
    padding: 0 1.6rem;
    color: white;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const Container = styled.div`
  grid-area: content;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-auto-flow: row; */
  gap: 1.6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardProduct = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 1.2rem;

  img {
    width: 100%;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  > div {
    padding: 0.8rem 1.6rem;
    border: 1px solid red;

    div {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
