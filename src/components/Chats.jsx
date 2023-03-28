import React from "react";
import pp from "../img/pp-blue.png";
const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={pp} alt="profilepic" />
        <div className="userChatInfo">
          <span>Abraham</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={pp} alt="profilepic" />
        <div className="userChatInfo">
          <span>Abraham</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={pp} alt="profilepic" />
        <div className="userChatInfo">
          <span>Abraham</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={pp} alt="profilepic" />
        <div className="userChatInfo">
          <span>Abraham</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
