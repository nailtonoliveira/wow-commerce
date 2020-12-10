import { useRouter } from 'next/router';
import TextMoneyStyled from '../styles/components/TextMoney';
import formatValue from '../utils/formatValues';

interface TextMoneyProps {
  children: number;
}

const TextMoney = ({ children }: TextMoneyProps): JSX.Element => {
  const { locale, defaultLocale } = useRouter();
  const value = formatValue(children, locale || defaultLocale || '');

  return <TextMoneyStyled>{value}</TextMoneyStyled>;
};

export default TextMoney;
