import React, { Component, Fragment } from 'react';
import './GarageInfo.css';
import './test.css';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col, CardBody} from 'reactstrap';
import classnames from 'classnames';

const cardStyle = {
  border: '2px solid rgba(248, 201, 62, 0.2)'
}

class App extends Component 
{
  constructor(props)
  {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = 
    {
      activeTab: '1'
    };
  }

  toggle(tab) 
  {
    if (this.state.activeTab !== tab) {
      this.setState(
        {
        activeTab: tab
      });
    }
  }

  render() 
  {
    return (
      <Fragment>
          <div className="GarageInfo">
                <Card style={cardStyle}>
                    <CardBody>
                    <CardTitle><h3>{this.props.garageName}</h3></CardTitle>
                    <div>

                    <Nav tabs className="nav nav-tabs justify-content-center">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '1' })}
                          onClick={() => { this.toggle('1'); }}
                        >
                          Students
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                        >
                          Employees
                        </NavLink>
                      </NavItem>
                    </Nav>
                    
                    <TabContent activeTab={this.state.activeTab} >
                      <TabPane tabId="1" >
                        <Row>
                          <Col sm="12" >
                          {/* <p><b>Students:</b></p> */}

                            <div className="flex-wrapper">
                                <div className="single-chart">
                                  <svg viewBox="0 0 36 36" className="circular-chart red">
                                    <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                      strokeDasharray={this.props.percentFullStudents.substring(0,(this.props.percentFullStudents.length - 1)) + ", 100"}
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="percentage">{this.props.percentFullStudents}</text>
                                  </svg>
                                </div>
                              </div>

                                Spots Open: <b>{this.props.spotsAvailableForStudents} / {this.props.totalStudentParking}</b>

                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                                {/* <p><b>Employees:</b></p> */}
                              
                              {/* https://codepen.io/sergiopedercini/pen/jmKdbj */}
                            <div className="flex-wrapper">
                              <div className="single-chart">
                                <svg viewBox="0 0 36 36" className="circular-chart red">
                                  <path className="circle-bg"
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <path className="circle"
                                    strokeDasharray={this.props.percentFullEmployees.substring(0,(this.props.percentFullEmployees.length - 1)) + ", 100"}
                                    d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                  />
                                  <text x="18" y="20.35" className="percentage">{this.props.percentFullEmployees}</text>
                                </svg>
                              </div>
                            </div>                    
                              
                             Spots Open: <b>{this.props.spotsAvailableForEmployees} / {this.props.totalEmployeeParking}</b>
                          
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                      </div>
                      </CardBody>
                  </Card>
          </div>
      </Fragment>
    );
  }
}

export default App;
