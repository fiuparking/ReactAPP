import styled from 'styled-components';
import Bar from '../ProgressBar';

export const Card = styled.div`
  background-color: var(--white);
  min-width: 90%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid var(--tab-color);
  border-radius: 0.25rem;
`;

export const Title = styled.h3`
  text-align: center;
  color: var(--fiu-blue);
  background-color: var(--fiu-yellow);
  padding: 10px;
`;

export const ProgressBar = styled(Bar)`
  width: 100px;
  height: 100px;
  overflow: hidden;
  vertical-align: middle;
`;

export const Tab = styled.div``;
