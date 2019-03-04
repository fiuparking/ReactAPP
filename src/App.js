import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// porting in components
import Home from './components/Home';
import Header from './components/Header';



class App extends Component 
{

  constructor()
  {
    super();
    this.state = {
      linkName: "Home",
      homeMounted: true
    }
  }


  callFromChildComponent()
  {
    console.log("I was called from a child component");
  }

  changeLinkName(link){
    this.setState({
      linkName: link
    })
  }

  onChangeHomeMount(){
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  

  render() 
  {
    let user = {
      name: "Steve",
      food: "bits"
    };

    let homeComponent = "";

    if(this.state.homeMounted)
    {
      homeComponent = (
        // {/* passing in props to bob */}
        <Home 
            name={"Bob"} 
            Personage={50} 
            user={user}
            changelink = {(value) => this.changeLinkName(value)}
            initialLinkText = {this.state.linkName}
        >
            <p> I am a child tag</p>
        </Home>
      );
    }

    return (
      <div className="App">
      {/* passing in components */}
        <Header 
        homeLink = {this.state.linkName}
        call={this.callFromChildComponent} 

         />

        {homeComponent}


        {/* Fix this TODO */}
        <button onClick={() => this.onChangeHomeMount()} className="btn btn-primary">(Un)Mount home component</button>

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
