export interface MessagesState {
    messages: any[];
    error: null | string;
}
export enum MessagesActionTypes {
    GET_MESSAGES = 'GET_MESSAGES',
    GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS',
    GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR',
}

interface GetMessagesAction {
    type: MessagesActionTypes.GET_MESSAGES;
}

interface GetMessagesSuccessAction {
    type: MessagesActionTypes.GET_MESSAGES_SUCCESS;
    payload: any[]
}

interface GetMessagesErrorAction {
    type: MessagesActionTypes.GET_MESSAGES_ERROR;
    payload: string
}

export type MessageAction = GetMessagesSuccessAction | GetMessagesErrorAction | GetMessagesAction