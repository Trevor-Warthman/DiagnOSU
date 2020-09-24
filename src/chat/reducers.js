import { SEND_USER_MESSAGE, SEND_WATSON_MESSAGE } from "./actions";

export function sendMessageReducer(state={messages: [], isWaiting: false}, action) {
    console.log('sendmessage reducer called');
    switch(action.type) {
        case(SEND_WATSON_MESSAGE): return {
            messages: [...state.messages, {content: action.content, isUser: false}],
            isWaiting: false
        }
        case(SEND_USER_MESSAGE): return {
            messages: [...state.messages, {content: action.content, isUser: true}],
            isWaiting: true
        }
        default: return {
            ...state
        }
    }
}