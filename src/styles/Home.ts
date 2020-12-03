import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1100px 1fr;
  grid-template-rows: 6.4rem 100%;
  grid-template-areas:
    'header header header'
    '. content .';
  row-gap: 1.6rem;

  @media (max-width: 1101px) {
    grid-template-columns: 1fr 900px 1fr;
  }

  @media (max-width: 901px) {
    grid-template-columns: 1fr 600px 1fr;
  }

  @media (max-width: 601px) {
    grid-template-columns: 1.6rem 1fr 1.6rem;
  }
`;

export const Header = styled.div`
  grid-area: header;

  position: sticky;
  top: 0;

  padding: 0 4.8rem;
  background: #673ab7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-family: 'Lilita One', sans-serif;
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
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  /* grid-auto-rows: minmax(300px, auto); */
  grid-auto-flow: row dense;
  grid-gap: 1.6rem;
  align-content: start;

  @media (max-width: 1101px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 901px) {
    grid-template-columns: repeat(2, 1fr);
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

  img {
    width: 100%;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  > div {
    padding: 0.8rem 1.6rem 1.6rem;
    /* border: 1px solid red; */

    p {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    strong {
      font-size: 2rem;

      span {
        font-size: 4.8rem;
      }
    }

    div:last-child {
      margin-top: 1.6rem !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
