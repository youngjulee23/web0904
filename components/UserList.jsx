import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const UserList = (props) => {
    const {userList, dispatch} = props;
    return (
        <div className='wrapper'>
            <table>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>나이</td>
                        <td>지역</td>
                        <td>삭제</td>
                    </tr>
                </thead>
            </table>
            <tbody>
                {userList.map((user, idx) => (
                    <tr key={idx}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        <td>
                            <button
                            onClick={()=> dispatch({type: 'deleteMember', username:user.name})}>
                                ❌
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </div>
    );
};

export default UserList;