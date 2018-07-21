import * as types from '../contanst/ModalType';
var initState = {
    modalIsOpen: false
};
var myReducers = (state = initState, action) => {
    switch (action.type) {
        case types.STATUS_MODAL:
            return {
                modalIsOpen : action.status_modal
            };
        default: return state;
    }
};
export default myReducers;

