import styled, { keyframes } from 'styled-components';

const progress = (props) => keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;

export const StyledSVG = styled.svg`
  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle-bg {
    fill: none;
    stroke: rgba(0, 150, 0, 0.500);
    stroke-width: 2.5;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: ${progress} 1s ease-out forwards;
  }

  .circular-chart {
    &.organge .circle {
      stroke: #4cc790;
    }
  }

  &.circular-chart {
    &.yellow .circle {
      stroke: #ff9f00;
    }
  }

  &.circular-chart {
    &.green .circle {
      stroke: #4cc790;
    }
  }

  &.circular-chart {
    &.red .circle {
      stroke: #e03030;
    }
  }

  .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`;