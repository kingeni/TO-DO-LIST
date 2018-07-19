import {createStore} from 'redux';


var initState = {
    status : false
}
var myReduce = (state = initState , action) =>{
    return state;

}
const store = createStore();
console.log(store);

