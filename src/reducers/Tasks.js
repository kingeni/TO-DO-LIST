import * as types from '../contanst/ActionType';
var initialState = [{
    name: 'Learn JS',
    note: 'lesson 1',
    status: false,
    date: '0111-11-11T11:01'
},
{
    name: 'TEST JS',
    note: 'lesson 2',
    status: true,
    date: '0111-11-11T11:01'
}
];
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            
            return [...state, action.works];
        case types.DELETE_TASK:
            console.log(state);
           // let newState = [...state.slice(0,action.id),state.slice(action.id + 1)];
        //    state.splice(action.id, 1);

            return  [...state.slice(0,action.id),state.slice(action.id + 1)];
        case types.UPDATE_TASK:
            return state;
        default:
            return state;
    }

};
export default myReducers;