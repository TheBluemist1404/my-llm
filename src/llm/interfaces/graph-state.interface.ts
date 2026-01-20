import { MessagesAnnotation, Annotation } from '@langchain/langgraph';

export const MessagesState = Annotation.Root({
  ...MessagesAnnotation.spec,
  isMathQuestion: Annotation<boolean>(),
  response: Annotation<string | undefined>({
    reducer: (_prev, next) => next ?? _prev,
  }),
});

export type MessagesStateType = typeof MessagesState.State;
export type State = MessagesStateType;
