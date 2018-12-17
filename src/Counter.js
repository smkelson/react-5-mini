import React, { Component } from 'react';

import {increment} from './ducks/counter';
import {connect} from 'react-redux';
import {decrement} from './ducks/counter';

class Counter extends Component {
  render() {
    const { increment, decrement, currentValue } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

function filterProps(state){
  //filter here;
  //what you return gets put on props  
  return state;
}

const actionsToDispatch = {
  increment, decrement
}



const connectedCounter = connect(
  filterProps,
  actionsToDispatch,
);

export default connectedCounter(Counter);
