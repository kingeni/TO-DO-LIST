import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class Work extends Component{
    handleDel =() => {
       const {index} = this.props;
       this.props.onDelete(index);
    }
    onHandle=()=>{
        console.log("asdasd");

    }
    render(){
        const {item, index} = this.props;
        
        let check = item.status === true ? 'ACTIVE' : 'HIDE';
        return ( 
                    <tr>
                    <th>{index+1}</th>
                    <th>{item.name}</th>
                    <th>{item.note}</th>
                    <th><a onClick={this.onHandle}>{check}</a></th>
                    <th>{item.date}</th>
                    <th><button onClick={this.handleDel}>DETELE</button></th>
                    <th><button onClick={this.onEdit}>EDIT</button></th>
                    </tr>
        );
    }

}
const MapStateToProps = (state) =>{
    return {

    }
};
const mapDispatchToProps = (dispatch , props) =>{
    return {
        onDelete : (id) => {
            dispatch(action.deleteTask(id));
            }
        }
    };
export default connect(MapStateToProps,mapDispatchToProps ) (Work);