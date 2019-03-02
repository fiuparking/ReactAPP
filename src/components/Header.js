import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
           <div classname="container">
              <div className="navbar-header">
                <ul className="nav navbar-header">
                  <li><a href="#">Home</a></li>
                </ul>
              </div>
           </div>
        </nav>
    );
  }
}

export default Header;
