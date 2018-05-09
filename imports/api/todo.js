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
    'todos.clearCompleted'(todo) {
        ToDos.remove({ _id: todo._id });
    }
});
