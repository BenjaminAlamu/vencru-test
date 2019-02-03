import React, { Component } from 'react';
import vencru from "../../assets/img/vencru.png";


import './modal.css';

class Modal extends Component {

  closeModal  = e =>{
        
        this.props.closeModal()
    }

    render() {
        if (!this.props.show) {
          return false
      }
    return (
        <div className="modal">
            <div className="wrapper">
                <div className="modal-content">
                    <p className="modal-title">Feedback</p>        
                    <textarea className='text-area' placeholder="Please share your comments or suggestions">
                    
                    </textarea>
                    <div className="buttons">
                        <button onClick={this.closeModal} className="cancel">Cancel</button>
                        <button className="save">Save</button>
                    </div>
                    <p className="bottom">Powered by <span><img src={vencru}/></span></p>
                </div>
            </div>
        
      </div>
    );
  }
}

export default Modal