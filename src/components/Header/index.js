import React from 'react';
import { Navbar, Logo } from './style';
import logo from '../../images/parking-logo.png';

export default () => (
  <Navbar>
    <a href="/">
      <Logo src={logo} alt="FIU Parking Logo" />
    </a>
  </Navbar>
);
