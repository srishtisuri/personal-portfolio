import uniqid from 'uniqid';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LaunchIcon from '@material-ui/icons/Launch';
import './RoleContainer.css';

const RoleContainer = ({ role }) => (
  <div className='role'>
    <h3>{role.name}</h3>

    <p className='role__description'>{role.description}</p>
    {role.stack && (
      <ul className='role__stack'>
        {role.stack.map((item) => (
          <li key={uniqid()} className='role__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* {role.sourceCode && (
      <a
        href={role.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {role.livePreview && (
      <a
        href={role.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
);

export default RoleContainer;
