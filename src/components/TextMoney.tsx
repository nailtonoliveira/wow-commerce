import TextMoneyStyled from '../styles/components/TextMoney';

interface TextMoneyProps {
  children: string;
}

const TextMoney = ({ children }: TextMoneyProps): JSX.Element => {
  return (
    <TextMoneyStyled>
      <span id="currencySymbol">R$</span>
      <span id="integerPart">150</span>
      <span id="decimalPart">,00</span>
    </TextMoneyStyled>
  );
};

export default TextMoney;
