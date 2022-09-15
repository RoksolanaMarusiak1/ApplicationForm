
import {MessageAction, MessagesActionTypes} from "../types/messages";
import {Dispatch} from "redux";
import axios from "axios";

export const getMessages = () => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({type: MessagesActionTypes.GET_MESSAGES})
            // real request should be here
            //const response = await axios.get('url')
            const response = [
                {
                    id: 1,
                    sender: "Virtual assistant",
                    isOnline: true,
                    messageText: `Hi!\n\nOur virtual assistant is chatting with\nyou right now. It can provide quick\nanswers to your questions regarding our\nproductsand services and, if necessary,\nconnect you with one of our advisers. \n\nHow can we help you today?`,
                  },
            ];
            setTimeout(() => {
                dispatch({type: MessagesActionTypes.GET_MESSAGES_SUCCESS, payload: response})
            }, 500)
        } catch (e) {
            dispatch({
                type: MessagesActionTypes.GET_MESSAGES_ERROR,
                payload: 'Oops... Something went wrong'
            })
        }
    }
}