import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error('Missing GOOGLE_API_KEY environment variable');
}

// const GeminiChatModel = new ChatGoogleGenerativeAI({
//   model: 'gemini-2.5-pro',
//   apiKey: apiKey,
// });

// export default GeminiChatModel

const GeminiChatModel = (model: string) => new ChatGoogleGenerativeAI({
  model: model,
  apiKey: apiKey
})

export default GeminiChatModel
