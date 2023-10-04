const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://srishtisuri.com',
  title: 'SRISHTI SURI',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Srishti',
  role: 'Software Engineer',
  description: `It's nice to meet you! I aspire to make a notable impact in my lifetime, professionally and personally. I am extremely passionate about building clean and feature rich applications. At the moment I am focussing on my repertoire of technical skills so that I can excel as a leader in the future. I am a huge people person and I am the happiest when I am helping others. I aim to always bring my burning desire to excel and authentic self to the table!`,
  resume: '',
  social: {
    linkedin: 'https://linkedin.com/in/srishti-suri',
    github: 'https://github.com/srishtisuri',
  },
};

const links = [
  {
    label: 'From UTS to Westpac',
    href: 'https://careersblog.uts.edu.au/from-intern-to-trailblazer-uts-alums-journey-at-westpac/'
  },
  {
    label: 'Sourcing an internship',
    href: 'https://careersblog.uts.edu.au/how-to-find-an-internship-youll-love-insights-from-uts-alumni/'
  },
  {
    label: 'Vim Shortcuts App',
    href: 'https://srishtisuri.github.io/vim-shortcuts-app/'
  }
];

const roles = [
  // roles can be added an removed
  // if there are no roles, Roles section won't show up
  {
    name: 'Software Engineer',
    description:
      'The pure joy (and pain) of problem solving is entrenched in every line of code I have ever written. I take pride in what I create and pursue the highest standard possible. The possibilities are abundant and I hope to combine my love of engineering with my desire to give back.',
    stack: ['React', 'Javascript', 'Node.js', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Teacher & Mentor',
    description:
      'One of my truest passions is sharing knowledge and I have had the privilege to mentor or teach almost 20+ school and university students in the last 7 years. I have also been actively involved in onboarding newcomers at work. Knowledge is a blessing that must be shared!',
    stack: ['STEM', 'University', 'High School', 'New Starters at Work'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Co-Founder',
    description:
      'Kuebik is a digital transformation agency. We have helped to curate the online presence of many small businesses. We are proud to support businesses that are doing good in the community such as disability support providers, mechanics, and physios to name a few.',
    stack: ['Wordpress', 'Web Design & Development', 'Hosting'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

const experiences = [
  {
    role: 'Front End Engineer',
    company: 'Westpac',
    dates: 'Feb 2020 - PRESENT',
    details: [
      `Part of the bank's strategic UI framework team, servicing hundreds of projects across the group. We build and maintain visual components, forms framework, wrapper components, API components, CLI tools to name a few.`,
      'Extensive development and maintenance work done on mature design system with 50+ components. Stack includes ReactJS, styled components, Nx, Selenium Grid, React Testing Library.',
      'Considerable experience with CI/CD. As a team, we build and maintain Bamboo pipelines that are utilised internally to deploy our libraries and by projects who consume our framework.',
    ],
  },
  {
    role: 'Co-Founder',
    company: 'Kuebik',
    dates: 'Feb 2019 - PRESENT',
    details: [
      'Holistic digital transformation of small businesses. We collaborate with business owners to curate their content and set up digital infrastructure as per the needs of their business.',
      'We build Wordpress sites, design logos, business cards and manage hosting and domains for our clients.',
      'We run sessions at the end of projects to encourage clients to make basic changes and become more digitally literate.',
    ],
  },
  {
    role: 'Information Security Analyst (Co-op)',
    company: 'Westpac',
    dates: 'Feb - Jul 2019',
    details: [
      `Created an excel tool using VBA that assessed the viability of third party vendors from a security lens. This would go on to become the first line of defence in onboarding vendors who could adversely impact the bank's security posture.`,
      'Worked with security architects who consulted on projects across the bank. Learnt about security risks and project embedded security.',
    ],
  },
  {
    role: 'Digital Summer Intern',
    company: 'Macquarie',
    dates: 'Nov 2018 - Feb 2019',
    details: [
      'Worked with Sketch, Figma and Zeplin alongside senior UX designers.',
      'Designed wireframes and then high fidelity screens for new Macquarie Business Banking web application.',
    ],
  },
  {
    role: 'UX Researcher (Co-op)',
    company: 'IBM iX',
    dates: 'Jul - Dec 2017',
    details: [
      'Designed user experience interviews.',
      'Assisted in running focus groups and consolidating feedback into action items.',
      `Designed and produced social media compaign for new startup focussing on women's financial literacy`,
    ],
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'NodeJS',
  'React',
  'RTK/Redux Saga',
  'Git',
  'DevSecOps',
  'Agile',
  'Bash',
  'Jest',
  'Codecept',
  'Enzyme/RTL',
  'Public Speaking',
  'Stakeholder Engagement',
  'Framework Engineering',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'srishti.suri@outlook.com',
};

export { header, about, links, experiences, roles, skills, contact };
