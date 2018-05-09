import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import TodoListHeader from '../imports/ui/containers/app/TodoListHeader';
import TodoInput from '../imports/ui/containers/app/TodoInput';
import TodoList from '../imports/ui/containers/app/TodoList';
import TodoListFooter from '../imports/ui/containers/app/TodoListFooter';
import AccountsUIWrapper from '../imports/ui/components/AccountsWrapper';

import { ToDos } from '../imports/api/todo';

const styles = {
    backgroundColor: 'white',
    height: '100vh',
    textAlign: 'center',
    width: '400px',
    margin: '0 auto',
    header: {
        backgroundColor: 'violet',
        padding: '10px 0',
        color: 'white',
        fontWeight: 'normal'
    },
    toDoInput: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: 'lightgrey'
    },
    input: {
        backgroundColor: 'transparent',
        border: '0',
        borderBottom: '1px solid grey',
        boxShadow: 'none'
    },
    listItem: {
        listStyleType: 'none',
        textAlign: 'left',
        borderBottom: '1px solid grey',
        padding: '10px 20px'
    },
    list: {
        padding: '0'
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px'
    },
    inputText: {
        color: 'grey'
    },
    todoCheck: {
        border: '2px solid grey',
        borderRadius: '50%'
    }
};

class TodoListApp extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        };
        this.toggleComplete = this.toggleComplete.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    toggleComplete(item) {
        Meteor.call('todos.toggleComplete', item);
        // let todos = this.props.todos.map(todo => {
        //     if (item._id === todo._id) {
        //         todo.completed = !todo.completed;
        //     }
        //     return todo;
        // });
        // this.setState({ todos });
    }

    removeTodo(item) {
        // ToDos.remove({ _id: item._id });
        Meteor.call('todos.removeTodo', item);

        // let todos = this.props.todos.filter(todo => todo.id !== item.id);
        // this.setState({ todos });
    }

    clearCompleted() {
        const completedTodos = this.props.todos.filter(
            todo => todo.completed === true
        );
        completedTodos.map(todo => Meteor.call('todos.clearCompleted', todo));
    }

    handleInput(event) {
        this.setState({ inputText: event.target.value });
    }

    addTodo(event) {
        event.preventDefault();

        const newTodo = {
            todo: this.state.inputText,
            completed: false,
            owner: this.props.currentUserId
        };

        Meteor.call('todos.addTodo', newTodo);
    }

    render() {
        const { todos } = this.props;
        // const userTodos = todos.filter(
        //     todo => todo.owner === this.props.currentUserId
        // );
        return (
            <div className="app-wrapper">
                <div className="login-wrapper">
                    <AccountsUIWrapper />
                </div>
                {this.props.currentUser && this.props.currentUserId ? (
                    <div style={styles}>
                        <TodoListHeader />
                        <TodoInput
                            handleInput={this.handleInput}
                            addTodo={this.addTodo}
                        />
                        {todos.length > 0 ? (
                            <TodoList
                                todoListItems={todos}
                                toggleComplete={this.toggleComplete}
                                removeTodo={this.removeTodo}
                            />
                        ) : (
                            'Nothing to do'
                        )}
                        <TodoListFooter
                            todoCount={todos.length}
                            clearCompleted={this.clearCompleted}
                        />
                    </div>
                ) : (
                    <div className="logged-out-message">
                        <p>Please sign in to see your todos.</p>
                    </div>
                )}
            </div>
        );
    }
}

const TodoAppContainer = withTracker(() => {
    Meteor.subscribe('todos');
    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId(),
        todos: ToDos.find({}).fetch()
    };
})(TodoListApp);

Meteor.startup(
    ReactDOM.render(<TodoAppContainer />, document.getElementById('root'))
);
