import React, { Component } from 'react';
class Modal extends Component {
    render() {
        return (<div className="container">
        {/* <h2>Modal Example</h2>
        <!-- Button to Open the Modal -->
        <a  className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </a> */}
      
        {/* <!-- The Modal --> */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
            
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
             
              {/* <!-- Modal body --> */}
              <div className="modal-body">
                
              </div>
              
              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
        );


    }
}
export default Modal;