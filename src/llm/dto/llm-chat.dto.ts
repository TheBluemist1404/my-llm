import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsString,
  ValidateNested,
} from 'class-validator';
import { type Chat } from '../interfaces/chat.interface';

export class ChatMessageDto implements Chat {
  @IsIn(['user', 'ai'])
  role: 'user' | 'ai';

  @IsString()
  content: string;
}

export class LlmChatDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMessageDto)
  context: ChatMessageDto[];

  @IsString()
  message: string;
}
