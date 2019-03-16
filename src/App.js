import React, { Component, Fragment } from 'react';
import './App.css';
import GarageInfo from './components/GarageInfo';
class App extends Component 
{
  constructor(props)
  {
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

  componentDidMount(){
    //Todo test api later
    let FIU_API_LINK = "https://m.fiu.edu/feeds//transit/v1/json.php?section=parking";
    fetch(FIU_API_LINK)
    .then(results => {
      return results.json();
    })
    .then( data =>{
      this.setState({
        INPUTHERE: data
      });
      console.log(data);
    })
  }

  render() 
  {

    //Todo Template, Finish this later
    const parkingGarageOuput = this.state.INPUTHERE.map( 
      (Garage) =>{
      return(
        <GarageInfo
        key={Garage.GarageName}
        garageName={Garage.GarageName} 
        spotsAvailableForStudents={(Garage.StudentMax - Garage.StudentSpaces)} 
        spotsAvailableForEmployees={Garage.OtherMax - Garage.OtherSpaces}
        percentFullStudents={Garage.StudentFull}
        percentFullEmployees={Garage.OtherFull}
        />);
      

    })


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
