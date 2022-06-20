import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const intialState = {
  conversations: ["room1", "room2", "room3"],
};
export const conversationReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {...state,
    conversations:[...state.conversations,action.payload],
    };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations:state.conversations.filter(
            (conversation)=>conversation!==action.payload
        )
      };
    default:
      return state;
  }
};
