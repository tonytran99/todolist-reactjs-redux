import * as types from "./../constants/ActionTypes";

var initialState = {
    name: '',
    status: -1
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            action.filter.status = parseInt(action.filter.status,10);
            return action.filter;
        default:
            return state;
  }
};

export default myReducer;
