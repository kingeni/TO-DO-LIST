var initState = false;
  

  var myReduce = (state = initState, action) => {
    if (action.type === 'TOGGLE_CHANGE') {
      state = !state;
    }
    return state;

  }
  export default myReduce;