import * as types from '../contanst/type';
export const status = () => {
    return {
        type: types.TOGGLE_CHANGE
    }
}
export const sort = (sort) => {
    return {
        type: types.TOGGLE_SORT,
        sort
    }

    
}