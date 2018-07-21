import * as types from '../contanst/ActionType';
import * as type_modal from '../contanst/ModalType';
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
export const changeModal = (status_modal) =>{
    return {
        type : type_modal.STATUS_MODAL,
        status_modal
    };
};