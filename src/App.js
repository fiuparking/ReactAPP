import React, { Component, Fragment } from 'react';
import './App.css';
import GarageInfo from './components/GarageInfo';
class App extends Component 
{
  constructor(props){
    super(props);
    this.state= {
      INPUTHERE: [
        {
          ONEobject: "1object"
        },
        {
          TWOobject: "2object"
        },
        {
          TWOobject: "2object"
        },
        {
          TWOobject: "2object"
        },
        {
          TWOobject: "2object"
        },
        {
          TWOobject: "2object"
        }
      ]
    }
  }
  render() 
  {

    //Todo Template, Finish this later
    const parkingGarageOuput = this.state.INPUTHERE.map( 
      (Garage) =>{
      return(
        <GarageInfo
        garageName={"input"} 
        spotsAvailableForStudents={"input"} 
        spotsAvailableForEmployees={"input"}
        percentFullStudents={"input"}
        percentFullEmployees={"input"}
        />);
      

    })
      //Todo test api later
    let FIU_API_LINK = "secret";


    return (
      <Fragment>
      <h1>FIU Parking Info</h1>
        <div className="App">
        {parkingGarageOuput}
        </div>
      </Fragment>

    );
  }
}

export default App;
