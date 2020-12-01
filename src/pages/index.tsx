import { FiShoppingCart } from 'react-icons/fi';

import Button from '../components/Button';
import IconButton from '../components/IconButton';

import { Main, Header, Container, CardProduct } from '../styles/Home';

const Home = (): JSX.Element => {
  return (
    <Main>
      <Header>
        <h1>Wow Commerce</h1>
        <input type="text" placeholder="Search Product" />
      </Header>

      <Container>
        <CardProduct>
          <img
            src="https://cdn.dooca.store/292/products/camiseta-one-piece-luffy-aberta.jpg?v=1585747520"
            alt="Camisa One Piece"
          />

          <div>
            <p>Product Name</p>

            <strong>R$ 150,00</strong>

            <div>
              <Button>Comprar Agora</Button>

              <IconButton>
                <FiShoppingCart />
              </IconButton>
            </div>
          </div>
        </CardProduct>
      </Container>
    </Main>
  );
};

export default Home;
