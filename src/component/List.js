import React, { Component } from 'react';

import '../App.css';
import Work from './Work';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        const map1 = this.props.works.map((arr, index) => 
           <Work item={arr} index={index} key={index} />
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
const mapStateToProps = (state)=> {
    return {
        works : state.works
    }

}


export default  connect(mapStateToProps,null) (NavBar);