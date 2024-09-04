import React, { useReducer, useState } from 'react';
import members from '../members';
import UserList from './UserList';
// import { type } from '@testing-library/user-event/dist/type';

// initialState = {
//     count: 0,
//     member: [
//         {
//             name: '',
//             age: '',
//             address: ''
//         }
//     ]
// }

const MemberInfo = () => {
    const initialState = {
        count: 0,
        member: []
    }

    const [userList, dispatch] = useReducer(members, initialState);
    const [newUser, setUser] = useState({});

    function changeHandler(e) {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            <div>
                <h1>전체 회원 수: {userList.count}</h1>
                <label>
                    이름: <input type='text' onChange={changeHandler} name='name'></input>
                    나이: <input type='number' onChange={changeHandler} name='age'></input>
                    지역: <input type='text' onChange={changeHandler} name='address'></input>
                </label>
            
                <button onClick={()=> dispatch({type: 'addMember', newUser: newUser})}>추가</button>
            </div>
            <UserList userList={userList.member} dispatch={dispatch}/>
        </div>
        
    );
};

export default MemberInfo;