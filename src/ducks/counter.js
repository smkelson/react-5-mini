//CONSTANTS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//ACTION CREATORS (actions are objects, action creators are functions)
export function increment(amount){
    return {
        type: INCREMENT,
        payload: amount,
    };
}
export function decrement(amount){
    return{
        type: DECREMENT,
        payload: amount,
    };
}

const initialState = {
    currentValue: 0,
};

//REDUCER
export default function(state = initialState, action){
  switch(action.type){
    case INCREMENT:
        var value = state.currentValue + action.payload;
      return Object.assign({}, state, {currentValue: value });
    case DECREMENT:
        var value = state.currentValue - action.payload;
        return Object.assign({}, state, {currentValue: value});
  }
}