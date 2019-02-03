import React, { Component } from 'react';
import invite from "../../assets/img/invite.png";
import more from "../../assets/img/more.png";
import notification from "../../assets/img/not.png";
import avatar from "../../assets/img/avatar.png";
import list from "../../assets/img/list.png";


import './header.css';

class Header extends Component {

    toggleHeader() {
        console.log(window.innerWidth)
        let style = document.getElementsByClassName("right")[0].style.display
        if (window.innerWidth > 700) {
            
        }
        else if ((window.innerWidth < 700) && (style === "" || style === "none")) {
            document.getElementsByClassName("right")[0].style.display = "block"
        }
        else {
            document.getElementsByClassName("right")[0].style.display = "none"
        }
    }

  render() {
    return (

            <div className="header" id="header">
            <p className="hide" onClick={this.toggleHeader}> <img src={list} className="drawer" /></p>
            <p></p>

                <div className="right">
                    <p className="invite"> <span><img src={invite} className="hide-me" /></span> <span>Invite</span></p>
                    <p className="more"><span>Create New</span> <span><img src={more}/></span>  </p>
                    <p className="notification hide-me"><img src={notification}/></p>
                    <div className="bio">
                        <p> <span className="name">David Ukauwa</span> <br/><span className="role hide-me">Wanted Creative Agency</span>
                        </p>
                        <img src={avatar} className="hide-me"/>
                    </div>
                </div>
                
                
            

      </div>
    );
  }
}

export default Header