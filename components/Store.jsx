import React, { useReducer } from 'react';
import reducer from '../reducer';


const Store = () => {

    const [total, dispatch] = useReducer(reducer, 0)
    const container = {
        textAligh: 'center'
    }
    const btnStyle = {
        background: 'none',
        border: '1px solid gray',
        padding: '20px',
        fontsize: '30px'
    }

    return (
        <div style={container}>
            <h1>배고파</h1>
            <h2>주문 내역: {}</h2>
            <h2>지불할 금액: {total}</h2>
            <button 
            style={btnStyle}
            onClick={()=> dispatch({type: '연어초밥', price: 20000})}>🍣</button>
            <button 
            style={btnStyle}
            onClick={()=> dispatch({type: '햄버거', price: 15000})}>🍔</button>
            <button 
            style={btnStyle}
            onClick={()=> dispatch({type: '치킨', price: 23000})}>🍗</button>
        </div>
    );
};

export default Store;