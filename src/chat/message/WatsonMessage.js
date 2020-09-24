import {Message} from "./Message";
import React from "react";
import "./WatsonMessage.css";
import "./Message.css";

export function WatsonMessage(props) {
    return (
        <div className="message-line">
            <Message styleClass="watson-message" content={props.content}/>
        </div>
    );
}