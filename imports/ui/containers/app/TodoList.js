import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
    render() {
        const { toggleComplete, removeTodo } = this.props;
        return (
            <ul style={styles.list}>
                {this.props.todoListItems.map(item => {
                    return (
                        <TodoItem
                            key={item.id}
                            item={item}
                            toggleComplete={toggleComplete}
                            removeTodo={removeTodo}
                        />
                    );
                })}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todoListItems: PropTypes.array.isRequired
};

const styles = {
    list: {
        padding: '0'
    }
};
