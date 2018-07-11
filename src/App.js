import React, { Component } from 'react';
import './App.css';
import AddNew from './component/AddNew';

class App extends Component {
   constructor(props){
     super(props);
     this.state = {
        components:'Welcome to My PROJECT',
        works:[]
     };
   }
  handleNew = (event)=>{
    let component = this.state.components;
    component = <AddNew/>;
    this.setState({components: component});
    event.preventDefault();
  }
  render() {
      return(
      <div>
          <nav className="topnav">
          <a className="active">TO DO LIST </a>
          <a href="" onClick={this.handleNew}>Add New</a>
          <a href="" onClick={this.handleList}>List</a>
          </nav>
            {this.state.components}
      </div>);
  }
}

export default App;