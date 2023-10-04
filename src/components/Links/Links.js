import { links } from '../../portfolio';
import './Links.css';

const Links = () => {
  if (!links) return null;

  return (
    <section className='section links center' id='links'>
      <h2 className='section__title'>Interesting Links</h2>
      <div className='links-list'>
      {links.map((link) => (
        <a target='_blank' rel='noreferrer' href={link.href}>
          <span type='button' className='btn btn--outline'>
          {link.label}
          </span>
        </a>
      ))}
      </div>
    </section>
  );
};

export default Links;
