import React, { Component } from 'react';
import img from "../../assets/img/image.png";
import Modal from "../modal/modal"
import './body.css';


class body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    showModal(e) {
        e.preventDefault();
        this.setState({
            show:true
        })
    }

    closeModal(e) {
        
        this.setState({
            show:false
        })
    }
  render() {
    return (
        <div className="body">
            <p className="text">Join us in developing Vencru to better serve your growing business</p>
            <img src={img} className="image" />
            <p className="minor-text">Collaborate on the evolution of Vencru by dropping feedback, suggesting, voting and commenting on ideas you believe in </p>
            <div className="buttons">
                <button onClick={this.showModal} className="addFeedback">Leave Feedback</button>
                <button className="ideas">Enter Ideas Portal</button>
            </div>
            <Modal show={this.state.show} closeModal={this.closeModal}/>
      </div>
    );
  }
}

export default body