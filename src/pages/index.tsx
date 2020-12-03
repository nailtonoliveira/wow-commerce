import { useRouter } from 'next/router';

import { MdAddShoppingCart } from 'react-icons/md';

import Button from '../components/Button';
import IconButton from '../components/IconButton';
import TextMoney from '../components/TextMoney';

import { Main, Header, Container, CardProduct } from '../styles/Home';

const Home = (): JSX.Element => {
  const router = useRouter();
  console.log(router);
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

            <TextMoney>R$ 150,00</TextMoney>

            <div id="actionsWrapper">
              <Button>Comprar Agora</Button>

              <IconButton>
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>

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
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>

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
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>

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
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>

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
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>

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
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>

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
                <MdAddShoppingCart size={20} viewBox="0 0 24 24" />
              </IconButton>
            </div>
          </div>
        </CardProduct>
      </Container>
    </Main>
  );
};

export default Home;
