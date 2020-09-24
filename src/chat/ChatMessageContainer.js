import React from "react";
import { UserMessage } from "./message/UserMessage";
import "./ChatMessageContainer.css";
import { WatsonMessage } from "./message/WatsonMessage";
import store from "./store";

export class ChatMessageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {messages: []};
        this.createMessageElement = this.createMessageElement.bind(this);

        store.subscribe(() => {
            this.setState(store.getState())
        });
    }

    createMessageElement(message) {
        if(message.isUser) {
            return (
                <UserMessage content={message.content}/>
            );
        } else {
            return (
                <WatsonMessage content={message.content}/>
            );
        }
    }

    render() {
        return (
            <div className="chat-message-container">
                {this.state.messages.map(c => this.createMessageElement(c))}
            </div>
        );
    }
}

