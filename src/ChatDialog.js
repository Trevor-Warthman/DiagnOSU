import React from "react";
import {UserMessage} from "./message/UserMessage";
import "./ChatDialog.css";
import {WatsonMessage} from "./message/WatsonMessage";

export class ChatDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {messages: []};
        this.addMessage = this.addMessage.bind(this);
        this.createMessageElement = this.createMessageElement.bind(this);
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

    addMessage(message) {
        this.setState(prevState => {
            return {messages: [...prevState.messages, message]}
        });
    }

    render() {
        return (
            <div data-testid="chat-dialog" className="chat-dialog">
                {this.state.messages.map(c => this.createMessageElement(c))}
            </div>
        );
    }
}