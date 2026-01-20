import dotenv from 'dotenv';
dotenv.config();

import { Injectable } from '@nestjs/common';
import {
  HumanMessage,
  SystemMessage,
  AIMessage,
} from '@langchain/core/messages';
import { ChatMessageDto, LlmChatDto } from './dto/llm-chat.dto';
import GPTChatModel from './models/gpt.chat.model';
import GeminiChatModel from './models/gemini.chat.model';
import ClaudeChatModel from './models/claude.chat.model';
import agentGraph from './llm.graph';

type chatModel = 'gpt' | 'gemini' | 'claude';
const defaultModel: chatModel = 'claude'

@Injectable()
export class LlmService {
  async llmChat(userInput: LlmChatDto): Promise<string> {
    const model: chatModel = defaultModel;

    const systemMsg = new SystemMessage('You are a helpful assistant.');
    let messages: (SystemMessage | HumanMessage | AIMessage)[] = [systemMsg];

    userInput.context.forEach((chat: ChatMessageDto) => {
      if (chat.role === 'user') messages.push(new HumanMessage(chat.content));
      if (chat.role === 'ai') messages.push(new AIMessage(chat.content));
    });

    const humanMsg = new HumanMessage(userInput.message);
    messages.push(humanMsg);

    // const result = await agentGraph.invoke({messages: messages}); // Returns AIMessage
    // return result.response as string;

    if (model === 'gemini') {
      const response = await GeminiChatModel('gemini-2.5-pro').invoke(messages);
      return response.content as string;
    } else if (model === "gpt") {
      const response = await GPTChatModel('gpt-5.1').invoke(messages);
      return response.content as string;
    } else {
      // if (model === "claude")
      const response =
        await ClaudeChatModel('claude-sonnet-4-5').invoke(messages);
      return response.content as string;
    }
  }
}
