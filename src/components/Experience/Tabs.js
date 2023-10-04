import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import _Tabs from '@mui/material/Tabs';
import _Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Tabs.css';
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer';
import { experiences } from '../../portfolio';

function TabPanel(props) {
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

export default function Tabs() {
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
        <_Tabs
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
          <_Tab className='tab-label' label='Westpac' {...a11yProps(0)} />
          <_Tab className='tab-label' label='Kuebik' {...a11yProps(1)} />
          <_Tab className='tab-label' label='Westpac' {...a11yProps(2)} />
          <_Tab className='tab-label' label='Macquarie' {...a11yProps(3)} />
          <_Tab className='tab-label' label='IBM IX' {...a11yProps(4)} />
        </_Tabs>
      </Box>
      {experiences.map((experience, index) => (
        <TabPanel key={uniqid()} value={value} index={index}>
          <ExperienceContainer experience={experience} />
        </TabPanel>
      ))}
    </Box>
  );
}
