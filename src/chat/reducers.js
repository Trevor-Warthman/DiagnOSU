import { SEND_USER_MESSAGE, SEND_WATSON_MESSAGE } from "./actions";

export function sendMessageReducer(state={messages: [], isWaiting: false}, action) {

    switch(action.type) {
        case(SEND_WATSON_MESSAGE): {
            if(action.content.response_type === 'option') {
                const watsonOptions = action.content.options.map(option => {
                    return {
                        content: option.label,
                        isUser: false
                    }
                });
                return {
                    messages: state.messages.concat({content: action.content.title, isUser: false}).concat(watsonOptions),
                    isWaiting: false
                }
            } else {
                return  {
                    messages: [...state.messages, {content: action.content.text, isUser: false}],
                    isWaiting: false
                }
            }
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

