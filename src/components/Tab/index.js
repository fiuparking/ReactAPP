import React from 'react';
import PropTypes from 'prop-types';
import { TabItem } from './style';

export default function Tab({ onClick, activeTab, label }) {
  return (
    <TabItem active={activeTab === label} onClick={() => onClick(label)}>
      {label}
    </TabItem>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
