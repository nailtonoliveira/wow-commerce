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

  a {
    text-decoration: none;
    color: #fff;
    font-family: 'Lilita One', sans-serif;
    font-size: 3.6rem;
  }

  div {
    a:first-of-type {
      margin-right: 0.8rem;
    }

    a {
      width: 24px;
      height: 24px;
    }
  }
`;

export const InputSearch = styled.div`
  border: 2px solid #7e57c2;
  border-radius: 8px;
  height: 40px;
  max-width: 300px;

  input {
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 1.6rem;
    color: white;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  svg {
    margin-right: 1.2rem;
    color: #fff;
  }
`;

export const Container = styled.div`
  grid-area: content;

  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 1.6rem;
  align-content: start;

  @media (max-width: 1101px) {
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

  img {
    width: 100%;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  & > div {
    display: flex;
    padding: 0.8rem 1.6rem 1.6rem;
    flex-direction: column;
    justify-content: space-between;

    p {
      width: 100%;
      white-space: pre;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    div:last-child {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
