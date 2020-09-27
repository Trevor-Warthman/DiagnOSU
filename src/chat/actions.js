export const SEND_USER_MESSAGE = 'SEND_USER_MESSAGE';
export const SEND_WATSON_MESSAGE = 'SEND_WATSON_MESSAGE';

export function sendUserMessageAction(content) {
    return {
        type: SEND_USER_MESSAGE,
        content: content
    }
}

export function sendWatsonMessageAction(watsonResponse) {
    return {
        type: SEND_WATSON_MESSAGE,
        content: watsonResponse
    }
}