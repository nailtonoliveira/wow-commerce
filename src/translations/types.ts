import basePtBR from './basePtBR';

export type Translation = typeof basePtBR;

export type TranslationKeys = keyof typeof basePtBR;

export interface Strings {
  [key: string]: Translation;
}
