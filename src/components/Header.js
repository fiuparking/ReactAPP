import React, { Component } from 'react';


class Header extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
        <nav className="navbar navbar-default">
           <div className="container">
              <div className="navbar-header">
                <ul className="nav navbar-header">
                  <li><a href="#">Home</a></li>
                </ul>
              </div>
           </div>
           <hr />
        <button onClick={this.props.call} className="btn btn-primary">Call Father Component</button>
        </nav>
       
    );
  }
}

export default Header;
