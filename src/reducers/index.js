import status from './status';
import sort from './sort';
import {combineReducers} from 'redux';
 const myReduce = combineReducers({
     status : status,
     sort : sort
 })
  export default myReduce;