import React from "react";
import "./Message.css";

export function Message(props) {
    return (
        <div className={props.styleClass + ' message'}>
            <span>{props.content}</span>
        </div>
    );
}