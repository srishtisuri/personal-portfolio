import React from 'react';
import { experiences } from '../../portfolio';
import Tabs from './Tabs';
import './Experience.css';

/* TODO: move tabs to separate folder */
const Experience = () => {
  if (!experiences.length) return null;

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>
      <Tabs />
    </section>
  );
};

export default Experience;
