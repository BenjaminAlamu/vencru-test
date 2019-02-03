import React, { Component } from 'react';
import dashboard from "../../assets/img/Dashboard.png";
import campaign from "../../assets/img/campaign.png";
import clients from "../../assets/img/clients.png";
import expenses from "../../assets/img/expenses.png";
import feedback from "../../assets/img/feedback.png";
import items from "../../assets/img/items.png";
import sales from "../../assets/img/sales.png";
import settings from "../../assets/img/settings.png";
import hamburger from "../../assets/img/hamburger.png"

import './sidebar.css';

class SideBar extends Component {

    toggleSideBar() {
        let style = document.getElementsByClassName("sidebar-content")[0].style.display
        if (window.innerWidth > 600) {
            return
        }
        else if  ((window.innerWidth < 600) && (style === "" || style === "none" || style === "hidden")) {
            document.getElementsByClassName("sidebar-content")[0].style.display = "block"
        }
        else {
            document.getElementsByClassName("sidebar-content")[0].style.display = "none"
        }
    }
  render() {
    return (
        <div className="sidebar">

            <div className="hamburger" id="ham" onClick={this.toggleSideBar}>
                <span className='hamburger-img'><img src={hamburger} className="ham-img" /></span>
                <span className="feedback"><p >Feedback</p></span>
            </div>
            <div className="sidebar-content" id="side-bar">

                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <span> <img src={dashboard}></img> </span>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={sales}></img> </span>
                                <span>Sales</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={expenses}></img> </span>
                                <span>Expenses</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={items}></img> </span>
                                <span>Items</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={clients}></img> </span>
                                <span>Clients</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={campaign}></img> </span>
                                <span>Campaign</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={settings}></img> </span>
                                <span>Settings</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span> <img src={feedback}></img> </span>
                                <span>Feedback</span>
                            </a>
                        </li>
                        
                    </ul>
                </nav>    
            
            </div>

      </div>
    );
  }
}

export default SideBar