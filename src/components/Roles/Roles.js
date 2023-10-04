import uniqid from 'uniqid';
import { roles } from '../../portfolio';
import RoleContainer from '../RoleContainer/RoleContainer';
import './Roles.css';

const Roles = () => {
  if (!roles.length) return null;

  return (
    <section id='roles' className='section roles'>
      <h2 className='section__title'>Roles</h2>

      <div className='roles__grid'>
        {roles.map((role) => (
          <RoleContainer key={uniqid()} role={role} />
        ))}
      </div>
    </section>
  );
};

export default Roles;
