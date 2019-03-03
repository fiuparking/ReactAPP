import React, { Component } from 'react';
// import React, { Component, PropTypes } from 'react';

class Home extends Component {
  constructor(props){
    super();
    this.state = {
      Age: props.Personage,
      status: 0
    };
  }
  increaseAge() {
    this.setState(
      {
      Age: this.state.Age++
    });
    console.log(this.state.Age);
  }

  render() {
    var test = "variables work before return";
    // view the properties passed to the component
    console.log(this.props);
    return (
        <div>
            <p>In the home Component!</p>
            {"Apperently I can run some javascript here and put it before the return method :D"}
            <p>My name is {this.props.name}</p>
            <p>My age is {this.state.Age}</p>
            <button className="addAge" onClick={() => this.increaseAge()}></button>
            <p>{test}</p>
            <hr/>
            {this.props.children}
        </div>
    );
  }
}

// Home.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number
// };


export default Home;
