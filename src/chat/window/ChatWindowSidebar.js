import "./ChatWindowSidebar.css";
import React from "react";

export const ChatWindowSidebar = ({ width, height, children }) => {
    const [xPosition, setX] = React.useState(-width);
  
    const toggleSidebar = () => {
      if (xPosition < 0) {
        setX(0);
      } else {
        setX(-width);
      }
    };
  
    React.useEffect(() => {
      setX(0);
    }, []);
    return (
      <React.Fragment>
        <div
          className="chat-window-sidebar"
          style={{
            transform: `translatex(${xPosition}px)`,
            width: width,
            minHeight: height
          }}
        >
          <button
            onClick={() => toggleSidebar()}
            className="toggle-sidebar"
            style={{
              transform: `translate(${width}px, 20vh)`
            }}
          ></button>
          <div className="content">{children}</div>
        </div>
      </React.Fragment>
    );
  };

  export default ChatWindowSidebar;