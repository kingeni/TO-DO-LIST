import React, { Component } from 'react';

import '../App.css';
import Work from './Work';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class NavBar extends Component {

    render() {
        console.log("workds:",this.props.works);
        const map1 = this.props.works.map((arr, index) => 
           <Work item={arr} index={index} key={index} onDel ={this.props.onDelete}  />
        );
        return (
            <div>
                <table border="1" className="list" >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>TITLE</th>
                            <th>NOTE</th>
                            <th>STATUS</th>
                            <th>START DAY</th>
                        </tr>
                        
                    </thead>
                    <tbody> 
                   {map1}
                    </tbody> 
                </table>
               
            </div>);
    }

}
const mapStateToProps = (state)=> {
    return {
        works : state.works
    }

}
const mapDispatchToProps = (dispatch , props) =>{
    return {
        onDelete : (id) => {
            dispatch(action.deleteTask(id));
            }
        }
    };

export default  connect(mapStateToProps,mapDispatchToProps) (NavBar);