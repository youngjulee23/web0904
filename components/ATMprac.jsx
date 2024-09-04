import React, { useReducer, useState } from 'react';
import atmPrac from '../atmPrac';

const ATMprac = () => {
    const [amount, dispatch] = useReducer(atmPrac,0);
    const [money, setMoney] = useState(0);

    const container = {
        textAlighn: 'center'
    }
    return (
        <div style={container}>
            <h3>금액을 입력하세요</h3>
            <input
            type='number'
            step='1000'
            value={money}
            onChange={(e) => setMoney(parseInt(e.target.value))}>
            </input>
            <h3>입금 또는 출금 버튼을 클릭하세요</h3>
            <button
            onClick={()=>dispatch({type: 'withdraw', number: money})}>
                입금
            </button>
            <button
            onClick={()=>dispatch({type: 'deposite', number: money})}>
                출금
            </button>
        </div>
    );
};

export default ATMprac;