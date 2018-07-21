import * as types from '../contanst/ActionType';
var initialState = [{
    name: 'Learn JS',
    note: 'lesson 1',
    status: false,
    date: '20-11-2011'
  },
  {
    name: 'TEST JS',
    note: 'lesson 2',
    status: true,
    date: '21-11-2011'
  }
];
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
           
            return [...state, action.works];
        case types.DELETE_TASK:
            state.splice(action.id ,1);
            console.log(state);
            return [...state];   
        default:
            return state;
    }

};
export default myReducers;