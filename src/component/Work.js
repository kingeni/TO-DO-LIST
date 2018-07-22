import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';


class Work extends Component {

    handleDel = () => {
        const { index, onDel } = this.props;
        onDel(index);
    }

    openModal = (event) => {
        event.preventDefault();
        const { item, onShow,index,getIndex} = this.props;
        onShow(item,index);
        getIndex(index);
        
       this.props.onDal(true);
    }

   
    onSave = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        
       this.props.oneWork[name] = value;
    }
  
    render() {
        const { item, index} = this.props;
        let check = item.status === true ? 'ACTIVE' : 'HIDE';
        return (
            <tr  >
                <th>{index + 1}</th>
                <th>{item.name}</th>
                <th>{item.note}</th>
                <th>{check}</th>
                <th>{item.date}</th>
                <th><button onClick={this.handleDel}>DETELE</button></th>
                <th><button onClick={this.openModal}>VIEW</button></th>
            </tr>

        );
    }

}
const MapStateToProps = (state) => {
    return {
        modalIsOpen: state.modalIsOpen,
        oneWork: state.work
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDal: (bool) => {
            dispatch(action.changeModal(bool));
        },
        getIndex: (id)=>{
            dispatch(action.getIndex(id));
        }

    }

};

export default connect(MapStateToProps, mapDispatchToProps)(Work);