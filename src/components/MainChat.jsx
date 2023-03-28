import React from "react";
import Video from "../img/video.png";
import Call from "../img/telephone.png";
import More from "../img/more.png";
import Messages from "../components/Messages";
import Input from "../components/Input";

const MainChat = () => {
  return (
    <div className="mainchat">
      <div className="chatInfo">
        <span>Abraham</span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={Call} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default MainChat;
