import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import MainWrapper from '../../components/MainWrapper';

interface Product {
  id: number;
  name: string;
  price: 150;
  image: string;
}

const ProductDetails = (): JSX.Element => {
  const { id } = useRouter().query;
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3333/products/${id}`);
      const data: Product = await response.json();
      setProduct(data);
    } catch {
      console.warn('Error getting Products, check json-server is running!');
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <MainWrapper>
      <Header />
      <h1>Product detail</h1>
      <p>{JSON.stringify(product)}</p>
    </MainWrapper>
  );
};

export default ProductDetails;
