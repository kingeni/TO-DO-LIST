import React, { Component } from 'react';

class Work extends Component{
    handleDel =() => {
       const {index, onDelete} = this.props;
        onDelete(index);
    }
    render(){
        const {item, index} = this.props;
        
        let check = item.status === true ? 'ACTIVE' : 'HIDE';
        return ( 
                    <tr>
                    <th>{index+1}</th>
                    <th>{item.name}</th>
                    <th>{item.note}</th>
                    <th>{check}</th>
                    <th>{item.date}</th>
                    <th><button onClick={this.handleDel}>DETELE</button></th>
                    <th><button onClick={this.onEdit}>EDIT</button></th>
                    </tr>
        );
    }

}

export default Work;