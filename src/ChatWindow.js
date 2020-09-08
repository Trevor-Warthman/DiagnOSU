import React from "react";
import {ChatDialog} from "./ChatDialog";
import {ChatInputForm} from "./ChatInputForm";
import "./ChatWindow.css";

export class ChatWindow extends React.Component {

    constructor(props) {
        super(props);

        this.chatDialog = React.createRef();
        this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage(message) {

        this.chatDialog.current.addMessage({content: message, isUser: true});

        this.chatDialog.current.addMessage({content: "Watson Response", isUser: false});
    }

    render() {
        return (
            <div className="chat-window">
                <ChatDialog ref={this.chatDialog}/>
                <ChatInputForm onSubmit={this.submitMessage}/>
            </div>
        );
    }
}