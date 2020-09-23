import React from "react";
import {ChatDialog} from "./ChatDialog";
import {ChatInputForm} from "./ChatInputForm";
import "./ChatWindow.css";
import Header from "./ChatWindowHeader";
import ChatWindowSidebar from "./ChatWindowSidebar";

export class ChatWindow extends React.Component {

    constructor(props) {
        super(props);

        this.chatDialog = React.createRef();
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {count: 0};
    }

    submitMessage(message) {

        let response;
        switch (this.state.count) {
            case 0:
                response = "What are your symptoms?";
                break;
            case 1:
                response = "Have you already taken a covid test?";
                break;
            case 2:
                response = "You should get a test ASAP.";
                break;
            default:
                response = "Have a nice day";
        }

        this.chatDialog.current.addMessage({content: message, isUser: true});
        // todo Get watson answers with ^^^ input
        this.chatDialog.current.addMessage({content: response, isUser: false});
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div> 
                <Header />
                <div class="main-wrapper">
                    <ChatWindowSidebar width ={300} height ={"100vh"}>
                        <h1> TODO put link or something here </h1>
                        <h1> TODO put link or something here </h1>
                        <h1> TODO put link or something here </h1>
                    </ChatWindowSidebar>
                    <div className="chat-window">
                        <ChatDialog ref={this.chatDialog}/>
                        <ChatInputForm onSubmit={this.submitMessage}/>
                    </div>
                </div>
            </div>  
        );
    }
}