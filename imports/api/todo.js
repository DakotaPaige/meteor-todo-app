import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const ToDos = new Mongo.Collection('todos');

Meteor.methods({
    'todos.addTodo'(newTodo) {
        ToDos.insert(newTodo);
    },
    'todos.removeTodo'(item) {
        ToDos.remove({ _id: item._id });
    },
    'todos.toggleComplete'(item) {
        ToDos.update(
            { _id: item._id },
            { $set: { completed: !item.completed } }
        );
    },
    'todos.clearCompleted'(completedIds) {
        ToDos.remove({ _id: { $in: completedIds } });
    }
});

if (Meteor.isServer) {
    Meteor.publish('todos', function todosPublication() {
        return ToDos.find({ owner: this.userId });
    });
}
