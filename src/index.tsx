import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers/index';
import { Counter } from './components/Counter';

const store = createStore(counter);

const render () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})} 
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        onReset={() => store.dispatch({type: 'RESET'})}
        />,
    document.getElementById("main")
);

render();

store.subscribe(render);