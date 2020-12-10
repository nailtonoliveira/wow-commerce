import styled from 'styled-components';

export default styled.main`
  display: grid;
  grid-template-columns: 1fr 1080px 1fr;
  grid-template-rows: 6.4rem 1fr;
  grid-template-areas:
    'header header header'
    '. content .';
  row-gap: 1.6rem;

  @media (max-width: 1081px) {
    grid-template-columns: 1fr 900px 1fr;
  }

  @media (max-width: 901px) {
    grid-template-columns: 1fr 600px 1fr;
  }

  @media (max-width: 601px) {
    grid-template-columns: 1.6rem 1fr 1.6rem;
  }
`;
