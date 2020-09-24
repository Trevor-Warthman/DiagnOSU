export const SEND_USER_MESSAGE = 'SEND_USER_MESSAGE';
export const SEND_WATSON_MESSAGE = 'SEND_WATSON_MESSAGE';

export function sendUserMessage(content) {
    return {
        type: SEND_USER_MESSAGE,
        content
    }
}

export function sendWatsonMessage(content) {
    return {
        type: SEND_WATSON_MESSAGE,
        content
    }
}