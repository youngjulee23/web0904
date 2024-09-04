import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // function upCount() {
    //     setCount((prevState)=> prevState+1)
    // }
    // function updateInput(e) {
    //     setText(e.target.value)
    // }

    // useEffect(()=> {
    //     console.log('count 값이 변경되었습니다')
    // },[count]);
    // useEffect(()=> {
    //     console.log('text 값이 변경되었습니다')
    // },[text])

    const increment = () => {
        console.log('Before updating: ', count)
        setCount(count +1)
    }

    useEffect(()=> {
        console.log('After updating: ', count)
    }, [count])

    return (
        // <div>
        //     <h1>{count}</h1><br/>
        //     <button onClick={upCount}>+1</button><br/>
        //     <hr/>
        //     <input type='text' onChange={updateInput}></input><br/>
        //     <h1>{text}</h1>
        // </div>

        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default UseEffect;