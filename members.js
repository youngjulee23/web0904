import React from 'react';

const members = (state, action) => {
    switch(action.type) {
        case 'addMember':
            return{
                count: state.count +1,
                member: [...state.member, action.newUser]
            };
        case 'deleteMember':
            return{
                count: state.count -1,
                member: state.member.filter((user)=> user.name !== action.username),
            };
        default:
            return state;
    }
    return (
        <div>
            
        </div>
    );
};

export default members;