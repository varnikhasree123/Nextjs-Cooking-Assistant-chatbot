'use client';
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "../Actionprovider";
import MessageParser from "../MessageParser";
import config from "../config";

function ChatComponent() {
    return (
      <div className="chat-container">
        <div className="chat-header">Disability Employment Assistant</div>
        <div className="chatbot-wrapper">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      </div>
    );
}

export default ChatComponent;
