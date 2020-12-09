import { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { MdAddShoppingCart } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
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

interface Product {
  id: number;
  name: string;
  price: 150;
  image: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('http://localhost:3333/products');
    const products: Product[] = await response.json();
    return {
      props: {
        products,
      },
    };
  } catch {
    return {
      props: {
        products: [],
      },
    };
  }
};

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const { t } = useTranslation();

  const productList = useMemo(() => {
    return products || [];
  }, [products]);

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
        {productList.map(product => (
          <CardProduct key={product.id}>
            <img src={product.image} alt={product.name} />

            <div>
              <p>{product.name}</p>

              <TextMoney>{product.price}</TextMoney>

              <div id="actionsWrapper">
                <Button>{t('buyNow')}</Button>

                <IconButton>
                  <MdAddShoppingCart />
                </IconButton>
              </div>
            </div>
          </CardProduct>
        ))}
      </Container>
    </Main>
  );
};

export default Home;
