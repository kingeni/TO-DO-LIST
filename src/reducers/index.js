import { combineReducers } from 'redux';
import Tasks from './Tasks';
import Modal from './Modal';
const myReducers = combineReducers({
    works: Tasks,
    modalIsOpen :Modal 
});
export default myReducers;