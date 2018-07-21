
import React, { Component } from 'react';

import '../App.css';

class AddNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            check: true,
            works: {
                name: '',
                note: '',
                status: false,
                date: ''
            }
        }
    }
    onSave = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let { check } = this.state;

        if (value === '-1') value = true;
        if (value === '-2') value = false;
        let works = this.state.works;
        works[name] = value;
        this.setState({ works });
    }
  

    onSubmit = (event) => {
        const { onHandle } = this.props;
        const { works } = this.state;
        onHandle(event, works);
        window.alert("Add new successfully");
    }

  
    render() {


        return (
            <div>
                <form onSubmit={this.onSubmit} className="App-title" >
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td><input type="text" required pattern='[a-zA-Z0-9]+' name='name' onChange={this.onSave} /></td>
                            </tr>
                            <tr>
                                <td>Note</td>
                                <td><input type="text" name='note'  onChange={this.onSave} /></td>
                            </tr>
                            <tr>
                                <td>Start Time </td>
                                <td><input type="datetime-local" onChange={this.onSave} name='date' /></td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td><input type="radio" name="status" onChange={this.onSave} value='-1' />ACTIVE
                                <input type="radio" name="status" onChange={this.onSave} value='-2' />HIDE</td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" />&nbsp;
                    <input type="reset" />
                </form>
            </div>

        );
    }

}
export default AddNew;