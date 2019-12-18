import styled, { createGlobalStyle } from 'styled-components';
import { media } from './utils/media';

export const GlobalStyle = createGlobalStyle`
:root {
  --fiu-yellow: #f8c93e;
  --fiu-blue: #081e3f;
  --white: #ffffff;
  --tab-color: rgba(248, 201, 62, 0.2);
}

body {
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--fiu-blue);
  height: 100%;
  width: 100%;
  margin: 0;
}
`;

export const Content = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${media.tablet`grid-template-columns: repeat(2, 1fr)`};
  ${media.phone`grid-template-columns: 1fr`};
  grid-gap: 20px;
  justify-items: center;
  justify-content: center;
  padding: 0 10%;
  margin: 20px;
  ${media.phone`padding: 0 1%`};
  ${media.tablet`padding: 0 5%`};
`;

export const FetchedAt = styled.div`
  text-align: center;
  color: var(--white);
  font-size: medium;
  margin: 20px;
`;
