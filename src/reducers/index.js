import { combineReducers } from 'redux';
import Tasks from './Tasks';
import Modal from './Modal';
import OneTask from './OneTask';
const myReducers = combineReducers({
    works: Tasks,
    modalIsOpen :Modal ,
    work: OneTask
});
export default myReducers;