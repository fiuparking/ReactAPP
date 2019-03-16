import React, { Component } from 'react';
import './GarageInfo.css';
import {Row,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

class App extends Component 
{
  constructor(props)
  {
    super();
  }
  render() 
  {
    return (
        <div className="GarageInfo">
        <Row>
          <Col>
            <Card>
            <CardBody>
            <CardTitle>{this.props.garageName}</CardTitle>
            <CardText>
                <ul>
                  <li>Student Spots Open: {this.props.spotsAvailableForStudents}</li>
                  <li>Student Parking Spots Taken: {this.props.percentFullStudents}</li>
                  <li>Employee Spots Open: {this.props.spotsAvailableForEmployees}</li>
                  <li>Employee Parking Spots Taken: {this.props.percentFullEmployees}</li>
              </ul>
              </CardText>
              </CardBody>
              </Card>
          </Col>
        </Row>
        </div>
    );
  }
}

export default App;
