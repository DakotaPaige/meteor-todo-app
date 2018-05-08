import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClearButton from './ClearButton';

export default class TodoListFooter extends Component {
    render() {
        let text = '';
        switch (this.props.todoCount) {
            case 0: {
                text = 'Nothing to do!';
                break;
            }
            case 1: {
                text = 'Just one thing to do';
                break;
            }
            default: {
                text = 'Too much to do';
                break;
            }
        }
        return (
            <div style={styles.footer}>
                {this.props.todoCount > 1
                    ? this.props.todoCount + ' Todos'
                    : text}
                <ClearButton clearCompleted={this.props.clearCompleted} />
            </div>
        );
    }
}

TodoListFooter.propTypes = {
    todoCount: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired
};

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    }
};
