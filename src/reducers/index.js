import { combineReducers } from 'redux';
import Tasks from './Tasks';
import Modal from './Modal';
import OneTask from './OneTask';
import Id from './Id';
const myReducers = combineReducers({
    works: Tasks,
    modalIsOpen :Modal ,
    work: OneTask,
    index: Id
});
export default myReducers;