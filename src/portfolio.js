const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://srishtisuri.com',
  title: 'SRISHTI SURI',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Srishti',
  role: 'Front End Engineer',
  description: `It's nice to meet you! I aspire to make a notable impact in my lifetime, professionally and personally. I am extremely passionate about building clean and feature rich frontend applications. At the moment I am focussing on my repertoire of technical skills so that I can become an influential tech leader. I am the happiest when I am helping people and I aim to always bring my burning desire to excel and authentic self to the table!`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/srishti-suri',
    github: 'https://github.com/srishtisuri',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Engineer',
    description:
      'The pure joy (and pain) of problem solving is entrenched in every line of code I have ever written. I take pride in what I create and pursue the highest standard possible. The possibilities are abundant and I hope to combine my love of engineering with my drive to help people around the world.',
    stack: ['React', 'Javascript', 'Node.js', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Teacher & Mentor',
    description:
      'One of my truest passions is sharing knowledge and I have had the privilege to mentor or teach almost 20+ high school and university students in the last 7 years. I am especially invested in the Women in STEM movement and hope to collectively break barriers in this industry. Knowledge is a blessing that must be shared!',
    stack: ['STEM', 'University', 'High School'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Co-Founder',
    description:
      'A dream come true, Kuebik is a digital transformation agency. We have helped to curate the online presence of many small businesses. We are proud to support businesses that are doing good in the community such as disability support providers, mechanics, and physios to name a few.',
    stack: ['Wordpress', 'Web Design', 'PHP'],
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
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.',
      'Nunc dignissim risus id metus. Cras ornare tristique elit. Vivamus vestibulum ntulla nec ante. Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh.',
    ],
  },
  {
    role: 'Co-Founder',
    company: 'Kuebik',
    dates: 'Feb 2019 - PRESENT',
    details: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Aliquam tincidunt mauris eu risus.',
      'Vestibulum auctor dapibus neque.',
      'Nunc dignissim risus id metus.',
    ],
  },
  {
    role: 'Information Security Analyst (Co-op)',
    company: 'Westpac',
    dates: 'Feb - Jul 2019',
    details: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Aliquam tincidunt mauris eu risus.',
      'Vestibulum auctor dapibus neque.',
      'Nunc dignissim risus id metus.',
    ],
  },
  {
    role: 'Digital Summer Intern',
    company: 'Macquarie',
    dates: 'Nov 2018 - Feb 2019',
    details: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Aliquam tincidunt mauris eu risus.',
      'Vestibulum auctor dapibus neque.',
      'Nunc dignissim risus id metus.',
    ],
  },
  {
    role: 'UX Researcher (Co-op)',
    company: 'IBM iX',
    dates: 'Jul - Dec 2017',
    details: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Aliquam tincidunt mauris eu risus.',
      'Vestibulum auctor dapibus neque.',
      'Nunc dignissim risus id metus.',
    ],
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Project Management',
  'Stakeholder Management',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Git',
  'CI/CD',
  'AGILE',
  'Jest',
  'Selenium',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'srishti.suri@outlook.com',
};

export { header, about, experiences, projects, skills, contact };
