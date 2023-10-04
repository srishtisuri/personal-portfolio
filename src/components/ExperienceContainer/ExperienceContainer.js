import uniqid from 'uniqid';
import './ExperienceContainer.css';

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <span className='experience__title'>
      {experience.role}{' '}
      <span className='experience__company'>@ {experience.company}</span>
    </span>

    <p>{experience.date}</p>

    {experience.details && (
      <ul className='experience__details'>
        {experience.details.map((item) => (
          <li key={uniqid()} className='experience__details-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ExperienceContainer;
