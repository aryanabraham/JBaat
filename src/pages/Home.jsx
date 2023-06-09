import React from "react";
import Chatlog from "../components/Chatlog";
import MainChat from "../components/MainChat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <MainChat />
      </div>
    </div>
  );
};

export default Home;
