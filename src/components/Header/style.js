import styled from 'styled-components';
import { media } from '../../utils/media';

export const Navbar = styled.div`
  background-color: #f8c93e;
  padding: 10px 5%;
  position: block;
`;

export const Logo = styled.img`
  width: 20%;
  padding: 20px;
  ${media.phone`
    width: 40%;
    padding: 10px;
  `};
`;
