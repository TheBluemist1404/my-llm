import { Controller, Post, Body } from '@nestjs/common';
import { LlmService } from './llm.service';
import { LlmChatDto } from './dto/llm-chat.dto';

@Controller('llm')
export class LlmController {
  constructor(private llmService: LlmService) {}

  @Post() 
  chat(@Body() userInput: LlmChatDto) {
    return this.llmService.llmChat(userInput);
  }
}
