const atmPrac = (state, action) => { 
    switch(action.type) {
        case 'deposite':
            return state + action.number;
        case 'withdraw':
            return state - action.number;
        default:
            return state;
    }

}

export default atmPrac;