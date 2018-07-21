import * as types from '../contanst/ActionType';
export const listAll = () => {
        return {
            type : types.LIST_ALL
        };
};
export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        works: task
    };
};
export const deleteTask = (id)=>{
    return {
        type : types.DELETE_TASK,
        id
    };
};