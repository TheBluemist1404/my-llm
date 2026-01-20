import { SystemMessage } from '@langchain/core/messages';
import OrchestratorLLM from '../models/graph.orchestrator.model';
import { State } from '../interfaces/graph-state.interface';

export async function OrchestratorNode(state: State): Promise<Partial<State>> {
  const classificationPrompt = new SystemMessage(
    'You are a router. If the user message requires math, calculations, formulas, or step-by-step numeric reasoning, set isMathQuestion to true and leave content as "Gemini will do the logic". Otherwise, set isMathQuestion to false and provide a concise answer in content.',
  );

  const result = await OrchestratorLLM.invoke([classificationPrompt, ...state.messages]);

  console.log(result.isMathQuestion);
  console.log('orchestrator response: ', result.content);

  if (result.isMathQuestion) return { isMathQuestion: result.isMathQuestion };
  return { response: result.content };
}