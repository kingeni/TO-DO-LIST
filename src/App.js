import React, { Component } from 'react';
import './App.css';
import AddNew from './component/AddNew';
import NavBar from './component/List';
import { createStore } from 'redux';
import { sort, status } from './demo/action/index';

import myReduce from './reducers/index';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      components: '',
      works: [
        {
          name: 'Learn JS',
          note: 'lesson 1',
          status: false,
          date: '20-11-2011'
        },
        {
          name: 'TEST JS',
          note: 'lesson 2',
          status: true,
          date: '21-11-2011'
        }
      ]

    }
  };

  onHandle = (event, newWork) => {
    event.preventDefault();
    let works = this.state.works;
    works.push(newWork);
    this.setState({ works});
   

  }
  handleNew = (event) => {
    event.preventDefault();
    let {components} = this.state;
    components = <AddNew onHandle={this.onHandle} />;
    this.setState({ components });
  }
  handleList = (event) => {
    event.preventDefault();
    let {components, works} = this.state;
    components = <NavBar listItem={works} onDelete={this.handleDelete} />;
    this.setState({ components });
  }
  handleDelete =(id) =>{
    console.log("ID:" ,id);
    let {works} = this.state;
    console.log("APP:",works);
    works.splice(id, 1);
    this.setState({works});
  }
  render() {
    // const store = createStore(myReduce);
    // console.log('Defaul:', store.getState());
    // store.dispatch(status());
    // console.log(store.getState());

    // store.dispatch(sort({
    //   by : 'name',
    //   value : -1
    // }));
    // console.log("SORT :", store.getState());
    return (
      <div>
        <nav className="topnav">
          <a className="active">TO DO LIST </a>
          <a href="" onClick={this.handleNew}>Add New</a>
          <a href="" onClick={this.handleList} >List</a>
        </nav>
        {this.state.components === ''  ? <NavBar listItem={this.state.works} onDelete={this.handleDelete} /> : this.state.components} 
      </div>);
  }
}

export default App;

