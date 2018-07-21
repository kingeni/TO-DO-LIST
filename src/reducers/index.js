import { combineReducers } from 'redux';
import Tasks from './Tasks';
const myReducers = combineReducers({
    works: Tasks

});
export default myReducers;