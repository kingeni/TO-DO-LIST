import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

import Modal from 'react-modal';
class Work extends Component {

    handleDel = () => {
        const { index, onDel } = this.props;
        console.log("DELTE:",index);
        onDel(index);
    }

    openModal = (event) => {
        event.preventDefault();
        const { item, onShow } = this.props;
        onShow(item);
       
       this.props.onDal(true);
    }

    closeModal = (event) => {
        event.preventDefault();
       this.props.onDal(false);
     
    }
    onSave = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        
       this.props.oneWork[name] = value;
    }
    submit= (event)=>{
        event.preventDefault();
        const {  index, oneWork, updateWork } = this.props;
        console.log("submit:",index);
        updateWork(oneWork, index);
        this.closeModal();
    }
    render() {
        const { item, index, oneWork } = this.props;
        let check = item.status === true ? 'ACTIVE' : 'HIDE';
        console.log("notSumit:",index);
        return (
            <tr  >
                <th>{index + 1}</th>
                <th>{item.name}</th>
                <th>{item.note}</th>
                <th>{check}</th>
                <th>{item.date}</th>
                <th><button onClick={this.handleDel}>DETELE</button></th>
                <th><button onClick={this.openModal}>VIEW</button></th>
                <Modal
                    isOpen={this.props.modalIsOpen.modalIsOpen}
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}
                >
                    <div className="modal-header">
                        <h4 className="modal-title">Work Detail</h4>
                        <button type="button" onClick={this.closeModal} className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <form >
                        <div className="modal-body">
                            <table border="0">
                                <tbody>
                                    <tr>
                                        <th>NAME</th>
                                        <th><input type="text" defaultValue={oneWork.name} name='name' onChange={this.onSave} /></th>
                                    </tr>
                                    <tr>
                                        <th>Note</th>
                                        <th><input type="text" defaultValue={oneWork.note} name='note' onChange={this.onSave} /></th>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <th><input type="datetime-local" defaultValue={oneWork.date} name='date' onChange={this.onSave} /></th>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={this.submit} className="btn btn-danger">Update</button>
                            <button onClick={this.closeModal} type="button" className="btn btn-danger">Close</button>
                        </div>
                    </form>
                </Modal>
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
        }
    }

};

export default connect(MapStateToProps, mapDispatchToProps)(Work);