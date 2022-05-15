import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async findNonWords(sentence: string): Promise<Array<string>> {
    // extract words. format can be "word", "we're", "ping-pong"
    const words = sentence.match(/(\w+[-']\w+)|(\w+)/g);

    const { data: allWords } = await firstValueFrom(
      this.httpService.get(
        'https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt',
      ),
    );

    const nonWords = words.filter((word: string) => allWords.indexOf(word) < 0);

    return nonWords;
  }
}
