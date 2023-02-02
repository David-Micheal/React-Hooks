import React, { useReducer, useState } from "react";
import { reducerState } from "./ReducerState";

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducerState, { count: 0, show: false });

  return (
    <center>
      <div>
        <h2>UseReducer Hook</h2>
        <br />
        <h1>{state.count}</h1>
        {state.count === 20 ? null : (
          <button
            onClick={() => {
              dispatch({ type: "ICREMENTCOUNT" });
            }}
          >
            Add Count
          </button>
        )}
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement Count
        </button>
        {state.show ? <div>Show</div> : null}
      </div>
    </center>
  );
};

export default UseReducerHook;
