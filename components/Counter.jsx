import React, { useReducer } from 'react';
import countReducer from '../countReducer';

const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, 0);

    function numUp() {
        dispatch({type: "INCREMENT", icon:"🩷"});
    }
    function numDown() {
        dispatch({type: "DECREMENT", icon:"🩵"});
    }
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state}</b>입니다.
            </p>
            <button onClick={numUp}>+1</button>
            <button onClick={numDown}>-1</button>
        </div>
    );
};

export default Counter;