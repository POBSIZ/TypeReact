import Constants from "../constants";

const increment = (count:number) => {
    return {
        type: Constants.test.INCREMENT,
        payload: count + 1,
    };
};

const decrement = (count:number) => {
    return {
        type: Constants.test.DECREMENT,
        payload: count - 1,
    };
};

const testAction = {
    increment,
    decrement,
};

export default testAction;