import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './VerticalTabs.css';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className='tab-panel'
      {...other}
    >
      {value === index && (
        <Box>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Box>
        <Tabs
          variant='scrollable'
          scrollButtons
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          {/* TODO: refactor this to array.map */}
          <Tab className='tab-label' label='westpac' {...a11yProps(0)} />
          <Tab className='tab-label' label='kuebik' {...a11yProps(1)} />
          <Tab className='tab-label' label='westpac' {...a11yProps(2)} />
          <Tab className='tab-label' label='macquarie' {...a11yProps(3)} />
          <Tab className='tab-label' label='ibm ix' {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <span className='tab-panel__title'>
          Front End Engineer{' '}
          <span className='tab-panel__company'>@ Westpac</span>
        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span className='tab-panel__title'>
          Co-Founder <span className='tab-panel__company'>@ Kuebik</span>
        </span>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <span className='tab-panel__title'>
          Information Security Analyst{' '}
          <span className='tab-panel__company'>@ Westpac (Co-op)</span>
        </span>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <span className='tab-panel__title'>
          Digital Summer Intern{' '}
          <span className='tab-panel__company'>@ Macquarie</span>
        </span>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <span className='tab-panel__title'>
          UX Researcher{' '}
          <span className='tab-panel__company'>@ IBM iX (Co-op)</span>
        </span>
      </TabPanel>
    </Box>
  );
}
