import store from "./store";

export const SEND_USER_MESSAGE = 'SEND_USER_MESSAGE';
export const SEND_WATSON_MESSAGE = 'SEND_WATSON_MESSAGE';

export const CREATE_WATSON_SESSION = 'CREATE_WATSON_SESSION';

export function sendUserMessageAction(content) {

    store.dispatch(createWatsonSession());

    return {
        type: SEND_USER_MESSAGE,
        content: content
    }
}

export function sendWatsonMessageAction(content) {
    return {
        type: SEND_WATSON_MESSAGE,
        content: content
    }
}

export function createWatsonSession() {
    return {
        type: CREATE_WATSON_SESSION
    }
}