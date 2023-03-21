import React, { useContext } from "react";
import "../styles/chat.css";
import Add from "../images/Add.png";
import Camera from "../images/camera.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Contexts/ChatContext";

const Chat = () => {
  const {data} = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user && data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
