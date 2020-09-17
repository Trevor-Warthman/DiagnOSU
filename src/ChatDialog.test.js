import React from 'react';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {ChatDialog} from "./ChatDialog";

configure({ adapter: new Adapter() });

describe("Chat Dialog", () => {
    let mountedChatDialog;
    let props;
    const chatDialog = () => {
        if(!mountedChatDialog) {
            mountedChatDialog = mount(<ChatDialog {...props}/>);
        }
        return mountedChatDialog;
    }

    beforeEach(() => {
        props = {};
        mountedChatDialog = undefined;
    });

    it("renders a chat dialog with no messages", () => {
        const divs = chatDialog().find(".chat-dialog");
        expect(divs.length).toBe(1);

        const chatDialog = divs.first();
    });

    it("always renders a chat dialog", () => {
        const divs = chatDialog().find(".chat-dialog");
        expect(divs.length).toBe(1);
    });
});