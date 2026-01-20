import { ChatOpenAI } from '@langchain/openai';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

const GPTChatModel = ( model:string ) => new ChatOpenAI({
  model: model,
  temperature: 0,
  apiKey: apiKey,
  // other params...
});

export default GPTChatModel;
