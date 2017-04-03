import * as React from 'react';
import { Component, PropTypes } from 'react';

export class Counter extends Component {
    static propTypes = {
        value: PropTypes.object.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
    }

    render() {
        const { value, onIncrement, onDecrement, onReset } = this.props;

        return (
            <div>
                <p>{value.count}</p>
                <button onClick={onIncrement}>+</button>
                <button onClick={onReset}>R</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
};