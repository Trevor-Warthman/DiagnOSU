import React from 'react';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ChatWindow from "./ChatWindow";
import store from '../store';
import Provider from "react-redux/lib/components/Provider";

configure({ adapter: new Adapter() });

describe("Chat Window", () => {
    let mountedChatWindow;
    let props;
    const chatWindow = () => {
        if(!mountedChatWindow) {
            mountedChatWindow = mount(
                <Provider store={store}>
                    <ChatWindow {...props}/>
                </Provider>
            );
        }
        return mountedChatWindow;
    }

    beforeEach(() => {
        props = {};
        mountedChatWindow = undefined;
    });

    it("always renders an app div with a chat window child", () => {
        const divs = chatWindow().find(".chat-window");
        expect(divs.length).toBe(1);

        const chatInputForm = divs.find("form");
        expect(chatInputForm.length).toBe(1);
    });
});