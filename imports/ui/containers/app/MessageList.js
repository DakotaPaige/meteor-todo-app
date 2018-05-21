import React, { Component } from "react";
import Message from "./Message";
import ReactDOM from "react-dom";

import { withTracker } from "meteor/react-meteor-data";

import { Messages } from "../../../api/messages";

class MessageList extends Component {
  getMessages() {
    return [
      { _id: 1, time: new Date(), text: "Hello" },
      { _id: 2, time: new Date(), text: "You" }
    ];
  }

  renderMessages() {
    return this.props.messages.map(message => {
      return (
        <Message
          key={message._id}
          time={message.time}
          message={message.message}
        />
      );
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newMessage = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();
    Meteor.call("messages.addMessage", newMessage);

    ReactDOM.findDOMNode(this.refs.messageInput).value = "";
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          ref="messageInput"
          name="message"
          placeholder="Enter message..."
        />
      </form>
    );
  }

  render() {
    console.log(this.refs);
    return (
      <div className="message-container">
        <h1>Messages</h1>
        <ul>{this.renderMessages()}</ul>
        {this.renderForm()}
      </div>
    );
  }
}

const MessageListContainer = withTracker(() => {
  Meteor.subscribe("messages");
  return {
    messages: Messages.find({}).fetch()
  };
})(MessageList);

export default MessageListContainer;
