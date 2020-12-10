import Link from 'next/link';
import Image from 'next/image';

import { FiSearch } from 'react-icons/fi';

import useTranslation from '../hooks/useTranslation';

import { Container, InputSearch } from '../styles/components/Header';

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container>
      <div>
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
      </div>
    </Container>
  );
};

export default Header;
