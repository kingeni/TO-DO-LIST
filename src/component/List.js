import React, { PureComponent  } from 'react';

import '../App.css';
import Work from './Work';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class NavBar extends PureComponent  {

    render() {
        console.log("workds:", this.props.works);
        const map1 = this.props.works.map((arr, index) =>
        <Work   item={arr}
                index={index} 
                key={index} 
                onDel={this.props.onDelete} 
                onShow={this.props.showOneWorks}
                updateWork={this.props.updateWork} />
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
const mapStateToProps = (state) => {
    return {
        works: state.works
    }

}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (id) => {
            dispatch(action.deleteTask(id));
        },
        showOneWorks: (work) => {
            dispatch(action.showOneWork(work));
        },
        updateWork: (work, id) => {
            dispatch(action.updateWork(work, id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);