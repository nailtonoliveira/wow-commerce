import styled from "styled-components";

export const Main = styled.main`
  /* width: 100%; */
  /* height: 100%; */

  display: grid;
  grid-template-columns: 1fr 70.0rem 1fr;
  grid-template-rows: 6.4rem 100%;
  grid-template-areas: 
    'header header header'
    '. content .';
  row-gap: 1.6rem;

  @media (max-width: 732px) {  
    grid-template-columns: 1.6rem 1fr 1.6rem;
  }
    
`;

export const Header = styled.div`
  grid-area: header;

  position: sticky;
  top: 0;

  padding: 0 4.8rem;
  background: #673AB7;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
  }

  input {
    background: transparent;
    border: 2px solid #7E57C2;
    border-radius: 8px;
    min-width: 400px;
    height: 40px;
    padding: 0 1.6rem;
    color: white;

    ::placeholder {
      color: rgba(255,255,255,0.5);
    }
  }
`;

export const Container = styled.div`
  grid-area: content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.6rem;

  @media (max-width: 732px) {  
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardProduct = styled.div`
  background-color: #FFF;
  border-radius: 12px;

  img {
    max-width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  >div {

    padding: 0.8rem 1.6rem;
    border: 1px solid red;

    div {
      button:first-of-type {
        background-color: green;
      }

      button:last-of-type {
        background-color: yellow;
      }
    }
  }
`;
