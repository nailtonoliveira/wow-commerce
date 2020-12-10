import { useMemo } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { MdAddShoppingCart } from 'react-icons/md';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Button from '../components/Button';
import Header from '../components/Header';
import IconButton from '../components/IconButton';
import MainWrapper from '../components/MainWrapper';
import TextMoney from '../components/TextMoney';

import useTranslation from '../hooks/useTranslation';

import { Container, CardProduct } from '../styles/Home';

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
    <>
      <Head>
        <title>Home - Wow Commerce</title>
      </Head>
      <MainWrapper>
        <Header />

        <Container>
          {productList.map(product => (
            <CardProduct key={product.id}>
              <Link href={`product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <div>
                <Link href={`product/${product.id}`}>
                  <a>{product.name}</a>
                </Link>

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
      </MainWrapper>
    </>
  );
};

export default Home;
