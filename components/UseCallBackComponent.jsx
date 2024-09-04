import React, { useCallback, useEffect, useState } from 'react';

const UseCallBackComponent = () => {
    // const name1 = () => 'soo';
    // const name2 = () => 'soo';
    // console.log('name1: ', name1);
    // console.log('name2: ', name2);

    const [count, setCount] = useState(0);
    const clickHandler = useCallback(() => {
        console.log('count: ', count)
    }, [count])

    useEffect(()=> {
        console.log('clickHandler 변경')
    }, [clickHandler])

    return (
        // <div>
        //     {name1 === name2 ? '같다' : '다르다'}
        // </div>
        <>
        <input type='number' value={count} onChange={(e) => setCount(e.target.value)}/>
        <button onClick={clickHandler}>숫자출력</button>
        </>
    );
};

export default UseCallBackComponent;