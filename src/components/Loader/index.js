import React from 'react';
import { Loader, Container } from './style';
import logo from '../../images/fiu.png';

export default () => (
  <Container>
    <img src={logo} alt="FIU Logo" />
    <Loader />
  </Container>
);
