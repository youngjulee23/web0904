import React, { useRef, useState } from 'react';

const UseRefComponent = () => {
    // const ref = useRef('안녕하세요')
    // console.log('변경 전 ref 값: ', ref.current)

    // ref.current='hello'
    // console.log('변경 후 ref 값: ', ref.current)

    const [count, setCount] = useState(0);
    const countRef = useRef(0)

    function addStateHandler() {
        setCount(count+1)
        console.log('STATE 변경')
    }
    function addRefHandler() {
        countRef.current = countRef.current+1
        console.log(countRef.current)

    }

    return (
        <div>
            <h1>State 값: {count}</h1>
            <h1>Ref 값: {countRef.current}</h1>
            <button onClick={addStateHandler}>State</button>
            <button onClick={addRefHandler}>Ref</button>
        </div>
    );
};

export default UseRefComponent;