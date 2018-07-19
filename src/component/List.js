import React, { Component } from 'react';
import { createStore } from 'redux';
import '../App.css';
import Work from './Work';

class NavBar extends Component {



    render() {
        let { listItem, onDelete } = this.props;
        
        const map1 = listItem.map((arr, index) => 
           <Work item={arr} index={index} key={index} onDelete={onDelete}/>
        );
        console.log(map1);
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
export default NavBar;