import React from 'react';
import { experiences } from '../../portfolio';
import { VerticalTabs } from './VerticalTabs';
import './Experience.css';

const Experience = () => {
  if (!experiences.length) return null;

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>
      <VerticalTabs />
    </section>
  );
};

export default Experience;
