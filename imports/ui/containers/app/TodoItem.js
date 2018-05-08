import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    render() {
        const { item, toggleComplete, removeTodo } = this.props;
        return (
            <li style={styles.listItem}>
                <span>{item.todo}</span>
                <input
                    type="checkbox"
                    id={item.id}
                    checked={item.completed}
                    onClick={() => toggleComplete(item)}
                />
                <button
                    style={styles.trashButton}
                    onClick={() => removeTodo(item)}
                >
                    Trash
                </button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

const styles = {
    listItem: {
        listStyleType: 'none',
        textAlign: 'left',
        borderBottom: '1px solid grey',
        padding: '10px 20px'
    },
    todoCheck: {
        border: '2px solid grey',
        borderRadius: '50%',
        margin: '0px 10px'
    },
    trashButton: {
        backgroundColor: 'transparent',
        border: '2px solid mediumpurple',
        borderRadius: '3px',
        color: 'mediumpurple',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
};
