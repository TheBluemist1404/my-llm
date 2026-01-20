import { StateGraph, START, END } from "@langchain/langgraph";
import { LogicNode } from "./nodes/logic.node";
import { OrchestratorNode } from "./nodes/orchestrator.node";
import { MessagesState, MessagesStateType } from "./interfaces/graph-state.interface";

async function processLogic(state: MessagesStateType) {
  if (state.isMathQuestion) {
    return "logic";
  }

  return END;
}

const agentGraph = new StateGraph(MessagesState)
  .addNode('llmCall', OrchestratorNode)
  .addNode('logic', LogicNode)
  .addEdge(START, 'llmCall')
  .addConditionalEdges('llmCall', processLogic, ['logic', END])
  .addEdge('logic', END)
  .compile();

export default agentGraph
