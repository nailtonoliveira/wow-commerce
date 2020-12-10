import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;

  position: sticky;
  top: 0;

  background: #673ab7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  & > div {
    display: flex;
    /* justify-content: space-between; */

    width: 1080px;
    margin: 0 auto;

    a {
      text-decoration: none;
      color: #fff;
      font-family: 'Lilita One', sans-serif;
      font-size: 3.6rem;
    }

    div:last-of-type {
      justify-self: flex-end;

      a:first-of-type {
        margin-right: 0.8rem;
      }

      a {
        width: 24px;
        height: 24px;
      }
    }

    @media (max-width: 1096px) {
      margin: 0 1.6rem;
    }

    @media (max-width: 601px) {
      a {
        font-size: 2.4rem;
      }
    }
  }
`;

export const InputSearch = styled.div`
  border: 2px solid #7e57c2;
  border-radius: 8px;
  height: 40px;
  /* max-width: 300px; */

  flex: 1;

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
