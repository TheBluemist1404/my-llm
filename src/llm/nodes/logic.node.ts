import { State } from "../interfaces/graph-state.interface";
import { SystemMessage } from "langchain";
import GeminiChatModel from "../models/gemini.chat.model";

export async function LogicNode(state: State) {
  const systemMsg = new SystemMessage('You are a helpful science TA that would help student resolve the problem in a structural and easy to understand way. You explain and solve problem in details step by step, with easy to follow logic. Confirm is Google model is speaking before answering');
  state.messages[0] = systemMsg
  console.log(state.messages[0]);
  const result = await GeminiChatModel('gemini-2.5-pro').invoke(state.messages);
  console.log("logic node response: ", result.content);
  return {response: result.content}
}