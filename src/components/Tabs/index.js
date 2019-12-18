import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';
import { TabList } from './style';

function Tabs({ children }) {
  const [ activeTab, setActive ] = useState(children[0].props.label);

  return (
    <Fragment>
      <TabList>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              key={label}
              label={label}
              activeTab={activeTab}
              onClick={(tab) => setActive(tab)}
            />
          );
        })}
      </TabList>
      <div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </Fragment>
  );
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;