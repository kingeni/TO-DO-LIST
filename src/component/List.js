import React, { PureComponent  } from 'react';

import '../App.css';
import Work from './Work';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import Modal from 'react-modal';
class NavBar extends PureComponent  {
    onSave = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
       this.props.oneWork[name] = value;
    }
    submit= (event)=>{
        event.preventDefault();
        const {  oneWork, updateWork , id} = this.props;
        updateWork(oneWork, id.id);
       
    }

    closeModal = (event) => {
        event.preventDefault();
       this.props.onDal(false);
    }
    render() {
      
        const map1 = this.props.works.map((arr, index) =>
        <Work   item={arr}
                index={index} 
                key={index} 
                onDel={this.props.onDelete} 
                onShow={this.props.showOneWorks}
                />
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
                                        <th><input type="text" defaultValue={this.props.oneWork.name} name='name' onChange={this.onSave} /></th>
                                    </tr>
                                    <tr>
                                        <th>Note</th>
                                        <th><input type="text" defaultValue={this.props.oneWork.note} name='note' onChange={this.onSave} /></th>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <th><input type="datetime-local" defaultValue={this.props.oneWork.date} name='date' onChange={this.onSave} /></th>
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
            </div>);
    }

}
const mapStateToProps = (state) => {
    return {
        works: state.works,
        modalIsOpen: state.modalIsOpen,
        oneWork: state.work,
        id : state.index
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (id) => {
            dispatch(action.deleteTask(id));
        },
        showOneWorks: (work,id) => {
            dispatch(action.showOneWork(work,id));
        },
        updateWork: (work, id) => {
            dispatch(action.updateWork(work, id));
        },
        onDal: (bool) => {
            dispatch(action.changeModal(bool));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);