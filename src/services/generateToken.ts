import { generateRandomNumber } from '../utils/generateRandomNumber';
import words from '../words.json';

export function generateToken(): string {
  const date = Date.now();

  return `${generateWord(words.words)}-${generateWord(words.words)}-${String(date).substring(
    String(date).length - 5
  )}-${generateWord(words.words)}-${
    Number(String(date).substring(String(date).length - 5)) -
    generateRandomNumber(1, Number(String(date).substring(String(date).length - 5)) - 1)
  }-${generateWord(words.words)}-${generateWord(words.words)}`;
}

function generateWord(array: string[]): string {
  return array[generateRandomNumber(0, array.length - 1)].toLocaleLowerCase();
}
