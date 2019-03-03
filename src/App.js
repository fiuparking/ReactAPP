import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// porting in components
import Home from './components/Home';
import Header from './components/Header';



class App extends Component {
  render() {
    let user = {
      name: "Steve",
      food: "bits"
    }
    return (
      <div className="App">
      {/* passing in components */}
        <Header />
        {/* passing in props to bob */}
        <Home name={"Bob"} Personage={50} user={user}>
          <p> I am a child tag</p>
        </Home>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
