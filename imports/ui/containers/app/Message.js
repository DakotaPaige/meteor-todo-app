import React, { Component } from "react";
import { moment } from "moment";

class Message extends Component {
  // formatTime(time) {
  //   return moment(time).format("h:mm A");
  // }
  render() {
    console.log(this.props);
    return <li>{this.props.message}</li>;
  }
}

export default Message;
