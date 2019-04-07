import React, { Component, Fragment } from 'react';
import './App.css';
import GarageInfo from './components/GarageInfo';
class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state= {
      INPUTHERE: [],
      FetchedAt: null
    }
  }

  componentDidMount(){
    
    this.getInfo();
    //runs ever 5 minutes
    this.interval = setInterval(this.getInfo, 300000)
  }

  componentWillMount()
  {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }
  
  getInfo = () => 
  {
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
      this.setState({
        FetchedAt: this.state.INPUTHERE[0].asof
      });
      console.log(this.state.FetchedAt);
    })
    .catch(
      function() 
      {
        // This is where you run code if the server returns any errors
        console.log("Could not get the data!")
      }
    )
    console.log("THIS WORKS!?!?!?!");
  }

  render() 
  {

    //Todo Template, Finish this later
    const parkingGarageOuput = this.state.INPUTHERE.map( 
      (Garage) =>
      {
        //TODO Unsure if works.
        //DEAL WITH NEGATIVE PARKING
        if(Garage.StudentSpaces < 0)
        {
          Garage.StudentSpaces = 0;
        }
        if(Garage.OtherSpaces < 0)
        {
          Garage.OtherSpaces = 0;
        }
      return(
        <GarageInfo
        key={Garage.GarageName}
        fetched={Garage.asof}
        garageName={Garage.GarageName} 
        spotsAvailableForStudents={(Garage.StudentMax - Garage.StudentSpaces)}
        totalStudentParking={Garage.StudentMax}
        spotsAvailableForEmployees={Garage.OtherMax - Garage.OtherSpaces}
        totalEmployeeParking={Garage.OtherMax}
        percentFullStudents={Garage.StudentFull}
        percentFullEmployees={Garage.OtherFull}
        />);
    })


    return (
      <Fragment>
      <h1>
      <img src="https://parking.fiu.edu/wp-content/uploads/2017/03/parking-sustain-transport-hrz-fiu-color.png" alt="Fiu parking logo" width="25%"></img>
      </h1>
        <div className="App">
        {parkingGarageOuput}
        <div style={{color:"white",fontSize:"medium"}}>Fetched at: {this.state.FetchedAt}</div>
        </div>
      </Fragment>
    );
  }
}

export default App;
