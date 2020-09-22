import React from 'react';
import App from './App';
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("App", () => {
  let mountedApp;
  let props;
  const app = () => {
    if(!mountedApp) {
      mountedApp = mount(<App {...props}/>);
    }
    return mountedApp;
  }

  beforeEach(() => {
    props = {};
    mountedApp = undefined;
  });

  it("always renders an app div with a chat window child", () => {
    const divs = app().find(".App");
    expect(divs.length).toBe(1);

    const chatWindow = divs.find(".chat-window");
    console.log(chatWindow);
    expect(chatWindow.length).toBe(1);
  });
});