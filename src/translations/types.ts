import basePtBR from './basePtBR';

export type Translation = typeof basePtBR;

export interface Strings {
  [key: string]: Translation;
}
