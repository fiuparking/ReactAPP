import React, { Component, Fragment } from 'react';
import './GarageInfo.css';
import {Row,Card, CardBody, CardTitle, Col } from 'reactstrap';

const cardStyle = {
  border: '2px solid rgba(248, 201, 62, 0.2)'
}

class App extends Component 
{
  constructor(props)
  {
    super();
  }
  render() 
  {
    return (
      <Fragment>
        <div className="GarageInfo">
          <Row>
            <Col>
              <Card style={cardStyle}>
                <CardBody>
                <CardTitle><h3>{this.props.garageName}</h3></CardTitle>
                    <ul>
                      <li>Student Spots Open: {this.props.spotsAvailableForStudents} / {this.props.totalStudentParking}</li>
                      <li>Student Parking Spots Taken: {this.props.percentFullStudents}</li>
                      <li>Employee Spots Open: {this.props.spotsAvailableForEmployees} / {this.props.totalEmployeeParking}</li>
                      <li>Employee Parking Spots Taken: {this.props.percentFullEmployees}</li>
                  </ul>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default App;
