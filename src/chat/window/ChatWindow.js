import React from "react";
import "./ChatWindow.css";
import Header from "./ChatWindowHeader";
import ChatWindowSidebar from "./ChatWindowSidebar";
import { sendUserMessageAction, sendWatsonMessageAction } from "../actions";
import {connect} from "react-redux";
import ReactPlayer from "react-player"
import embedded_bot from "./embedded_bot"

var drBCapabilities = ["Help you determine if you need a test for COVID-19","Give you more information about COVID-19","Inform you on symptoms of COVID-19, the flu, and the common cold","Talk about the buckeyes"]

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
                    text: message
                }
            }),
            headers: {
                Authorization: "Basic YXBpa2V5OjJWYWo3VVQ1REh6Nkt6Y28xOHUyM2pyRVpFcHJ5Xzc5WGs3R3ozVEYxYnBB",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then(response => response.json())
            .then(data => data.output.generic.forEach(element => {
                this.props.dispatch(sendWatsonMessageAction(element));
            }));
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
                    <div className="youtube">
                        <ReactPlayer url="https://www.youtube.com/watch?v=DCdxsnRF1Fk&ab_channel=UpToDate"/>
                    </div>
                    <div className="Capabilities">
                        <h3>{"Dr. Brutus Can:"}</h3>
                        <ul> 
                            {drBCapabilities} 
                        </ul>
                    </div>
                    <div className="chat-window">
                        <embedded_bot />
                    </div>
                </div>
            </div>  
        );
    }
}

export default connect()(ChatWindow);
