import React from "react";
import {ChatDialog} from "../ChatDialog";
import {ChatInputForm} from "../ChatInputForm";
import "./ChatWindow.css";
import Header from "./ChatWindowHeader";
import ChatWindowSidebar from "./ChatWindowSidebar";
import { sendUserMessageAction, sendWatsonMessageAction} from "../actions";
import {connect} from "react-redux";

class ChatWindow extends React.Component {

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

        console.log(this.props);

        console.log(this.state);

        this.props.dispatch(sendUserMessageAction(message));
        // todo Get watson answers with ^^^ input
        this.props.dispatch(sendWatsonMessageAction(message));
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div> 
                <Header />
                <div class="main-wrapper">
                    <ChatWindowSidebar width ={300} height ={"100vh"}>
                        <h1 class="side-bar"> <a href="https://www.cdc.gov/coronavirus/2019-ncov/more/index.html">Center for Disease Control and Prevention: Covid</a> </h1>
                        <h1 class="side-bar"> <a href="https://www.nih.gov/coronavirus">National Institutes of Health: Covid</a> </h1>
                        <h1 class="side-bar"> <a href="https://www.columbus.gov/covid19resources/">City of Columbus Covid Resources</a> </h1>
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

export default connect()(ChatWindow);