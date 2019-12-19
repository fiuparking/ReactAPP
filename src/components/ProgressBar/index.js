import React from 'react';
import { StyledSVG } from './style';

export default function ProgressBar(props) {
  return (
    <StyledSVG
      viewBox="0 0 36 36"
      className="circular-chart red"
      width="100"
      height="100">
      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
      <path className="circle" strokeDasharray={`${props.percent}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
      <text x="18" y="20.35" className="percentage">
        {props.percent}%
      </text>
    </StyledSVG>
  );
}
