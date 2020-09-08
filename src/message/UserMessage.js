import {Message} from "./Message";
import React from "react";
import "./UserMessage.css";
import "./Message.css";

export function UserMessage(props) {
    return (
        <div className="message-line">
            <Message styleClass="user-message" content={props.content}/>
        </div>
    );
}