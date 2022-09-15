import {MessageAction, MessagesActionTypes, MessagesState} from "../types/messages";

const initialState: MessagesState  = {
    messages: [],
    error: null
  };

  export const messagesReducer = (state = initialState, action: MessageAction): MessagesState => {
    switch (action.type) {
        case MessagesActionTypes.GET_MESSAGES:
            return {error: null, messages: []}
        case MessagesActionTypes.GET_MESSAGES_SUCCESS:
            return {error: null, messages: action.payload}
        case MessagesActionTypes.GET_MESSAGES_ERROR:
            return {error: action.payload, messages: []}
        default:
            return state
    }
}