import React, { Component } from "react";
import { Moment } from "moment";

class Message extends Component {
  formatTime(time) {
    return moment(time).format("h:mm A");
  }

  render() {
    console.log(this.props);
    return (
      <li>
        <span>
          {this.formatTime(this.props.time)}: {this.props.user}
        </span>
        <span>{this.props.message}</span>
      </li>
    );
  }
}

export default Message;
