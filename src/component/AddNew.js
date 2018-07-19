
import React, { Component } from 'react';

import '../App.css';

class AddNew extends Component {
   
    constructor(props){
        super(props);
        this.state={
            check : true,
            works: {
                name: '',
                note: '',
                status: false,
                date: ''
            }
        }
    }
    onSave = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let {check} = this.state;
        
        if(value === '-1') value = true;
        if(value === '-2') value = false;
        let works = this.state.works;
        works[name] = value;
        this.setState({ works });
    }
    checkValid = (name, value) => {
        if(name == 'name' ){
        let regex = /[a-zA-Z0-9]/g;
        let check = value.match(regex);
        console.log("valid:",check);
        }
    }
 
    onSubmit = (event) =>{
        const { onHandle } = this.props;
        const { works} = this.state;
        let {check} = this.state;
        if(check){
            onHandle(event,works);
        }else {
            window.alert("Can not submit");
        } 
        
        
    }
    checkSubmit = () =>{
        let {check} = this.state;
        
    }
    render() {
       
            
        return (
            <div>
                <form onSubmit= {this.onSubmit} className="App-title" >
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td><input type="text" name='name' onChange={this.onSave} /></td>
                            </tr>
                            <tr>
                                <td>Note</td>
                                <td><input type="text" name='note'  onChange={this.onSave}/></td>
                            </tr>
                            <tr>
                                <td>Start Time </td>
                                <td><input type="datetime-local" onChange={this.onSave} name='date' /></td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td><input type="radio" name="status" onChange={this.onSave} value='-1'/>ACTIVE
                                <input type="radio" name="status" onChange={this.onSave} value='-2'/>HIDE</td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.checkSubmit} value="Submit" />&nbsp;
                    <input type="reset" value="Reset" />
                </form>
            </div>

        );
    }

}
export default AddNew;