import React from "react";
import {ChatMessageContainer} from "../ChatMessageContainer";
import {ChatInputForm} from "../ChatInputForm";
import "./ChatWindow.css";
import Header from "./ChatWindowHeader";
import ChatWindowSidebar from "./ChatWindowSidebar";
import { sendUserMessageAction } from "../actions";
import {connect} from "react-redux";

class ChatWindow extends React.Component {

    constructor(props) {
        super(props);

        this.chatDialog = React.createRef();
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {sessionId: ''};


    }

    componentDidMount() {
        fetch("https://api.us-south.assistant.watson.cloud.ibm.com/instances/abadaf22-9195-425a-aa9a-3e86f1cb4a28/v2/assistants/cca390d2-78f4-442c-b2e4-6275fe74ed82/sessions?version=2020-04-01", {
            headers: {
                Authorization: "Basic YXBpa2V5OjJWYWo3VVQ1REh6Nkt6Y28xOHUyM2pyRVpFcHJ5Xzc5WGs3R3ozVEYxYnBB"
            },
            method: "POST"
        }).then(response => response.json())
            .then(data => this.setState({sessionId: data.session_id}));
    }

    submitMessage(message) {

        this.props.dispatch(sendUserMessageAction(message));

        fetch(`https://api.us-south.assistant.watson.cloud.ibm.com/instances/abadaf22-9195-425a-aa9a-3e86f1cb4a28/v2/assistants/cca390d2-78f4-442c-b2e4-6275fe74ed82/sessions/${this.state.sessionId}/message?version=2020-04-01`, {
            body: JSON.stringify({
                input: {
                    text: "hello"
                }
            }),
            headers: {
                Authorization: "Basic YXBpa2V5OjJWYWo3VVQ1REh6Nkt6Y28xOHUyM2pyRVpFcHJ5Xzc5WGs3R3ozVEYxYnBB",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div> 
                <Header />
                <div className="main-wrapper">
                    <ChatWindowSidebar width={300} height={"100vh"}>
                        <h1 className="side-bar"> <a href="https://www.cdc.gov/coronavirus/2019-ncov/more/index.html">Center for Disease Control and Prevention: Covid</a> </h1>
                        <h1 className="side-bar"> <a href="https://www.nih.gov/coronavirus">National Institutes of Health: Covid</a> </h1>
                        <h1 className="side-bar"> <a href="https://www.columbus.gov/covid19resources/">City of Columbus Covid Resources</a> </h1>
                    </ChatWindowSidebar>
                    <div className="chat-window">
                        <ChatMessageContainer ref={this.chatDialog}/>
                        <ChatInputForm onSubmit={this.submitMessage}/>
                    </div>
                </div>
            </div>  
        );
    }
}

export default connect()(ChatWindow);