"use client";
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      // Check if respond method exists on actionProvider
      if (this.actionProvider && typeof this.actionProvider.respond === "function") {
        this.actionProvider.respond(message);
      } else {
        console.error("Error: `respond` method not defined in ActionProvider!");
      }
    }
  }
  
  export default MessageParser;
  