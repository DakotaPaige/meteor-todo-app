import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Messages = new Mongo.Collection("messages");

Meteor.methods({
  "messages.addMessage"(newMessage, currentUser) {
    Messages.insert({
      time: new Date(),
      message: newMessage,
      user: currentUser
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish("messages", function publishMessages() {
    return Messages.find();
  });
}
