import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

import Modal from 'react-modal';
class Work extends Component{
    
    handleDel =() => {
       const {index, onDel} = this.props;
       onDel(index);
    }
   
    openModal=()=> {
       this.props.onDal(true);
      }
    
     
    
      closeModal=()=> {
        this.props.onDal(false);
      }
       
      render(){
        const {item, index} = this.props;
        console.log("modal:",this.props.item);
        console.log("modal:",this.props.modalIsOpen);
        let check = item.status === true ? 'ACTIVE' : 'HIDE';
        return ( 
                    <tr   >
                    <th>{index+1}</th>
                    <th>{item.name}</th>
                    <th>{item.note}</th>
                    <th>{check}</th>
                    <th>{item.date}</th>
                    <th><button onClick={this.handleDel}>DETELE</button></th>
                    <th><button onClick={this.onEdit}>EDIT</button></th>
                    <th><button  onClick={this.openModal} >VIEW</button></th>
                    <Modal 
          isOpen={this.props.modalIsOpen.modalIsOpen}

          onRequestClose={this.closeModal}
           contentLabel="Example Modal"
        >
              <div className="modal-header">
                <h4 className="modal-title">Work Detail</h4>
                <button type="button" onClick ={this.closeModal} className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <label> </label>  
                <div   >
                    <div>{index+1}</div>
                    <div>{item.name}</div>
                    <div>{item.note}</div>
                    <div>{check}</div>
                    <div>{item.date}</div>
                    </div>
              </div>

                <div className="modal-footer">
                <button onClick ={this.closeModal} type="button" className="btn btn-danger">Close</button>
              </div>
         
        </Modal>
                    </tr>
                    
        );
    }

}
const MapStateToProps = (state) =>{
    return {
        modalIsOpen : state.modalIsOpen,
        item : state.works

    }
};
const mapDispatchToProps = (dispatch, props)=>{
    return {
        onDal : (bool) =>{
            dispatch(action.changeModal(bool));
        }
    }

};

export default connect(MapStateToProps,mapDispatchToProps ) (Work);