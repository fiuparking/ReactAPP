import React from 'react';
import Tabs from '../Tabs';
import { Card, Title, Tab, ProgressBar } from './style';
import { removePercent, formatObject } from '../../utils';

export default function GarageInfo(props) {
  const {
    garageName,
    studentPercent,
    studentsParking,
    employeesParking,
    employeesPercent,
    availableForStudents,
    availableForEmployees,
  } = formatObject(props);

  return (
    <Card>
      <Title>{garageName}</Title>
      <Tabs>
        <Tab label="Students">
          <ProgressBar percent={removePercent(studentPercent)} />
          <br /> Students open spots: <b>{availableForStudents}/{studentsParking}</b>
        </Tab>
        <Tab label="Employees">
          <ProgressBar percent={removePercent(employeesPercent)} />
          <br /> Employees open spots: <b>{availableForEmployees}/{employeesParking}</b>
        </Tab>
      </Tabs>
    </Card>
  );
}
