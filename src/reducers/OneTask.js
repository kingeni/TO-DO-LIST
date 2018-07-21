import * as types from '../contanst/ActionType';
var initState = [{

}];
var myReducers = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_ONE_TASK:
            console.log("action:", action);
            return {
                name : action.work.name,
                note : action.work.note,
                date : action.work.date,
                status : action.work.status
            };
        default:
            return state;
    }
}
export default myReducers;