import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Text extends Component {
  render(){
    console.log(this.props)
    return (
      <div>Hello, <span style={{color: this.props.color}}>{this.props.value}</span></div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><Text color="Red" value="Bob"/></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
