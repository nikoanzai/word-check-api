import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/find-non-words')
  findNonWords(@Body('sentence') sentence: string): Array<string> {
    return this.appService.findNonWords(sentence);
  }
}
