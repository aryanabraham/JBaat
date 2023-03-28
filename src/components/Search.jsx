import React from "react";
import pp from "../img/pp-blue.png";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search or start a new chat" />
      </div>
      <div className="userChat">
        <img src={pp} alt="profilepic" />
        <div className="userChatInfo">
          <span>Abraham</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
