import * as types from '../contanst/ActionType';
var initState=[{}];

var myReducers = (state = initState, action)=>{
        switch(action.type){
            case types.GET_INDEX:
            console.log(action);
            return {
                id : action.id
            }
            default: return state;
        }
}
export default myReducers;