import React, { Component } from 'react';
import logo from './logo.svg';
import SideBar from "./components/sidebar/sidebar"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
      </div>
    );
  }
}

export default App;
