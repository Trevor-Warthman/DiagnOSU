import React from 'react';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {ChatMessageContainer} from "./ChatMessageContainer";

configure({ adapter: new Adapter() });

describe("Chat Dialog", () => {
    let mountedChatDialog;
    let props;
    const chatDialog = () => {
        if(!mountedChatDialog) {
            mountedChatDialog = mount(<ChatMessageContainer {...props}/>);
        }
        return mountedChatDialog;
    }

    beforeEach(() => {
        props = {};
        mountedChatDialog = undefined;
    });

    it("renders a chat dialog with no messages", () => {
        const divs = chatDialog().find(".chat-message-container");
        expect(divs.length).toBe(1);
    });
});