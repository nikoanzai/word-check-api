import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  findNonWords(sentence: string): Array<string> {
    if (!sentence) return [];

    // extract words and lower-case them.
    // its format can be one of three: "word", "we're", "ping-pong"
    const words = sentence
      .match(/(\w+[-']\w+)|(\w+)/g)
      .map((word) => word.toLowerCase());

    // load words from file, lower-case them
    const data = fs.readFileSync(`${__dirname}/words.txt`, 'utf8');
    const allWords = data.split('\n').map((word) => word.toLowerCase());

    // filter words that don't exist in allWords
    const nonWords = words.filter((word: string) => allWords.indexOf(word) < 0);

    return nonWords;
  }
}
