import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
  
    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <th>STT</th>
                        <th>TITLE</th>
                        <th>NOTE</th>
                        <th>START</th>
                        <th>END</th>
                    </thead>
                </table>
            </div>);
    }

}
export default NavBar;