import Constants from "../constants";

const initState = {
    value: 0,
};

const test = (state = initState, action) => {
    switch (action.type) {
        case Constants.test.INCREMENT:
            return {
                ...state, value: action.payload
            };
        case Constants.test.DECREMENT:
            return {
                ...state, value: action.payload
            };
        default:
            return state;
    }
};

export default test;