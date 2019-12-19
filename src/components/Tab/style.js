import styled, { css } from 'styled-components';

export const TabItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--tab-color);
      border: solid var(--tab-color);
      border-width: 1px 1px 0 1px;
    `};
`;
