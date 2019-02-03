import React, { Component } from 'react';
import logo from './logo.svg';
import SideBar from "./components/sidebar/sidebar"
import Header from "./components/header/header"
import Body from "./components/body/body"

import './App.css';

class App extends Component {

  state = {
    show: false
  }

  render() {
    return (
      <div className="App">
        <div className="main">
        <SideBar />
        <div className="content">
            <Header />
            
          <Body/>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
