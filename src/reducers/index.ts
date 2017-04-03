import * as types from '../actions/index';

interface initialState {
    count: number
};

const initialState: initialState = {
    count: 0
}

const counter = (state = initialState, action: any): any => {
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case types.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case types.RESET:
            return Object.assign({}, state, {
                count: 0
            });
        default:
            return state;
    }
}

export default counter;