import React, { Component } from 'react';
// import React, { Component, PropTypes } from 'react';

class Home extends Component {
  render() {
    var test = "variables work before return";
    // view the properties passed to the component
    console.log(this.props);
    return (
        <div>
            <p>In the home Component!</p>
            {"Apperently I can run some javascript here and put it before the return method :D"}
            <p>My name is {this.props.name}</p>
            <p>{test}</p>
            <hr/>
            {this.props.children}
        </div>
    );
  }
}

// Home.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number,
//   user: React.PropTypes.object,
//   children: React.PropTypes.element.isRequired
// };


export default Home;
