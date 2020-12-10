const formatValue = (value: number, locale = 'pt-BR'): string => {
  const currencyMap = {
    'pt-BR': 'BRL',
    en: 'USD',
  };

  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyMap[locale],
  }).format(value);
};

export default formatValue;
