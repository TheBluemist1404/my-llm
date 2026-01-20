import { ChatAnthropic } from '@langchain/anthropic';

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  throw new Error('Missing ANTHROPIC_API_KEY environment variable');
}

const ClaudeChatModel = (model: string) => new ChatAnthropic({
  model: model,
  apiKey: apiKey,
});

export default ClaudeChatModel;
