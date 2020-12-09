import Image from 'next/image';
import Link from 'next/link';

import { MdAddShoppingCart } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

import Button from '../components/Button';
import IconButton from '../components/IconButton';
import TextMoney from '../components/TextMoney';

import useTranslation from '../hooks/useTranslation';

import {
  Main,
  Header,
  InputSearch,
  Container,
  CardProduct,
} from '../styles/Home';

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Main>
      <Header>
        <Link href="/">
          <a>Wow Commerce</a>
        </Link>

        <InputSearch>
          <input type="text" placeholder={t('search')} />
          <FiSearch />
        </InputSearch>

        <div>
          <Link href="/" locale="pt-BR">
            <a href="/">
              <Image
                src="/img/brazil.png"
                alt="Brasil"
                width="24"
                height="24"
              />
            </a>
          </Link>
          <Link href="/" locale="en">
            <a href="/">
              <Image
                src="/img/english.png"
                alt="Brasil"
                width="24"
                height="24"
              />
            </a>
          </Link>
        </div>
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
              <Button>{t('buyNow')}</Button>

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

            <TextMoney>R$ 150,00</TextMoney>

            <div id="actionsWrapper">
              <Button>{t('buyNow')}</Button>

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

            <TextMoney>R$ 150,00</TextMoney>

            <div id="actionsWrapper">
              <Button>{t('buyNow')}</Button>

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

            <TextMoney>R$ 150,00</TextMoney>

            <div id="actionsWrapper">
              <Button>{t('buyNow')}</Button>

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
