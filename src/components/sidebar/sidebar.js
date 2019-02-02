import React, { Component } from 'react';
import dashboard from "../../assets/img/Dashboard.png";
import campaign from "../../assets/img/campaign.png";
import clients from "../../assets/img/clients.png";
import expenses from "../../assets/img/expenses.png";
import feedback from "../../assets/img/feedback.png";
import items from "../../assets/img/items.png";
import sales from "../../assets/img/sales.png";
import settings from "../../assets/img/settings.png";

import './sidebar.css';

class SideBar extends Component {

    toggleSideBar() {
        let style = document.getElementById("side-bar").style.display
        if (style === "" || style === "none") {
            document.getElementById("side-bar").style.display = "block"
        }
        else {
            document.getElementById("side-bar").style.display = "none"
        }
    }
  render() {
    return (
        <div className="sidebar">
            <div className="hamburger" id="ham" onClick={this.toggleSideBar}>
                <p>Hanburger for side nav</p>
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