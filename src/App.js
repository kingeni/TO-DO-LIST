import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    };
  }

  onSubmit = () => {

    var test = {
      title: this.refs.title.value,
      work: this.refs.content.value
    };
  let newWord = this.state.works;
  newWord.push(b);
    this.setState({ works: newWord });
  }

  render() {
    let element = this.state.works.map((work) => {
      return <div>
        <table>
            <tr>
                <td>{work.title}</td>
                <td>{work.work}</td>
            </tr>
            </table>
        </div>

    });
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Title: </td>
              <td> <input type="text" ref="title" /> </td>
            </tr>
            <tr>
              <td>Work: </td>
              <td> <input type="text" ref="content" /> </td>
            </tr>

          </tbody>


        </table>
        <button type="submit" onClick={this.onSubmit} > Oke </button>
       
          {element}
        
      </div>
    );
  }
}

export default App;
