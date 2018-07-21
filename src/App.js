import React, { Component } from 'react';
import './App.css';
import AddNew from './component/AddNew';
import NavBar from './component/List';
import Modal from './component/Modal';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: '',
    }
  };

  
  handleNew = (event) => {
    event.preventDefault();
    let {components} = this.state;
    components = <AddNew />;
    this.setState({ components });
  }
  // componentDidUpdate(){
  //   this.handleList();
  // }

  
  // handleDelete =(id) =>{
  //   console.log("ID:" ,id);
  //   let { components ,works} = this.state;
  //   console.log("APP:",works);
  //   works.splice(id, 1);
  //   this.setState({works});
  //   components = <NavBar listItem={works} onDelete={this.handleDelete} />;
  //   this.setState({ components});
  // }
  handleList = (event) => {
    event && event.preventDefault();
    let {components} = this.state;
    components = <NavBar/>;
    this.setState({ components });
  }
 
  render() {
   
    return (
      <div>
        <nav className="topnav">
          <a className="active">TO DO LIST </a>
          <a href="" onClick={this.handleNew}>Add New</a>
          <a href="" onClick={this.handleList} >List</a>
        </nav>
        {this.state.components === ''  ? <NavBar /> : this.state.components} 
      </div>);
  }
}

export default App;

