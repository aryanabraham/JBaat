import React from "react";
import pp from "../img/pp.jpg";
import ppblue from "../img/pp-blue.png";
const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={ppblue} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={pp} alt="" />
      </div>
    </div>
  );
};

export default Message;
