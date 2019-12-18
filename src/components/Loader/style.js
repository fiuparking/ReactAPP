import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`;

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--fiu-yellow);
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Loader = styled.div`
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 4em;
  height: 4em;
  margin: 3em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid var(--fiu-blue);
  border-radius: 50%;
  animation: ${load} 1.1s infinite linear;
`;
