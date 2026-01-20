import { z } from 'zod';
import GPTChatModel from '../models/gpt.chat.model';

const ResponseSchema = z.object({
  content: z
    .string()
    .describe(
      'The natural language response to the user if the question does not involve mathematics or logic, else do not respond (let response be "Gemini will do the logic") and leave it to the next node',
    ),
  isMathQuestion: z
    .boolean()
    .describe('Whether the question involves mathematics or logic'),
});

const structuredGPT = GPTChatModel("gpt-4.1").withStructuredOutput(ResponseSchema);
export default structuredGPT;
