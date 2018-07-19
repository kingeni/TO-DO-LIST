var initState ={
    by: 'name',
    value: 1
}


var myReduce = (state = initState, action) => {
  
    if (action.type === 'TOGGLE_SORT') {
        var { by, value } = action.sort;
       
        return {
           
                by,
                value
            
        }
    }
    return state;

}
export default myReduce;