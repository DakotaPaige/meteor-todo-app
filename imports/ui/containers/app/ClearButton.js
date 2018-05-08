import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClearButton extends Component {
    render() {
        return (
            <button style={styles.button} onClick={this.props.clearCompleted}>
                Clear Completed
            </button>
        );
    }
}

ClearButton.propTypes = {
    clearCompleted: PropTypes.func.isRequired
};

const styles = {
    button: {
        backgroundColor: 'transparent',
        border: '2px solid mediumpurple',
        color: 'mediumpurple',
        borderRadius: '3px',
        padding: '5px 10px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '14px'
    }
};
