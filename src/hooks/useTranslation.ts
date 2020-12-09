import { useRouter } from 'next/router';

import strings from '../translations/strings';
import { TranslationKeys } from '../translations/types';

interface HookProps {
  t: (key: TranslationKeys) => string;
}

export default function useTranslation(): HookProps {
  const { locale, defaultLocale } = useRouter();

  function t(key: TranslationKeys): string {
    if (!strings[locale.replace(/-/, '')][key]) {
      console.warn(`Translation ${key} for ${locale} not found.`);
    }

    return (
      strings[locale.replace(/-/, '')][key] ||
      strings[defaultLocale.replace(/-/, '')][key] ||
      ''
    );
  }

  return { t };
}
