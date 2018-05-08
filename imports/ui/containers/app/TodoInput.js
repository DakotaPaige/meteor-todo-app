import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
    render() {
        const { handleInput, addTodo } = this.props;
        return (
            <div>
                <form
                    style={styles.toDoInput}
                    onSubmit={event => addTodo(event)}
                >
                    <input
                        type="text"
                        placeholder="Feed the dog"
                        style={styles.input}
                        name="todo"
                        onChange={event => handleInput(event)}
                    />
                    <span style={styles.inputText}>(press enter to add)</span>
                </form>
            </div>
        );
    }
}

TodoInput.propTypes = {
    handleInput: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
};

const styles = {
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
    inputText: {
        color: 'grey'
    }
};
