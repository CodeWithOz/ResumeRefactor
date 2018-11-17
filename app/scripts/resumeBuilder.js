/*
This is empty on purpose! Your code to build the resume will go here.
 */
const bio = {
  name: 'Uche Ozoemena',
  role: 'Web Developer',
  contacts: {
    mobile: 0123456789,
    email: 'codewithoz@outlook.com',
    github: 'https://github.com/CodeWithOz',
    location: 'Abuja'
  },
  welcomeMessage: 'Greetings! I am Uche and I am happy to meet you!',
  skills: [
    'Vanilla JavaScript',
    'jQuery',
    'Test-Driven Development',
    'Object-Oriented Programming',
    'Functional Programming',
    'Responsive Web Design',
    'Offline Capability with Service Worker API'
  ],
  biopic: 'images/prof_selfie_2.jpg',
  display: () => console.log('Display function of bio section. 😄')
};

const education = {
  schools: [
    {
      name: 'St. Mary\'s University',
      location: 'San Antonio, Texas, USA',
      degree: 'Bachelor of Science (BS)',
      majors: [
        'Biochemistry'
      ],
      dates: 'August 2011 - May 2015',
      url: 'https://www.stmarytx.edu/'
    },
    {
      name: 'Loyola Jesuit College',
      location: 'Abuja, Nigeria',
      degree: 'Diploma',
      majors: [
        'N/A'
      ],
      dates: 'September 2004 - July 2010',
      url: 'www.loyolajesuit.org/'
    }
  ],
  onlineCourses: [
    {
      title: 'Google Africa Challenge',
      school: 'Udacity',
      dates: 'May 2018 - July 2018',
      url: 'https://www.udacity.com/google-africa-scholarships'
    },
    {
      title: 'Front End Nanodegree',
      school: 'Udacity',
      dates: 'July 2018 - November 2018',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ],
  display: () => console.log('Display function of education section. 😄')
};

const work = {
  jobs: [
    {
      employer: 'HubbonNG Services Limited',
      title: 'Chief Operating Officer and Technology Lead',
      location: 'Abuja, Nigeria',
      dates: 'In progress',
      description: 'Make/manage the website and other responsibilities of the COO.'
    },
    {
      employer: 'DPT Laboratories',
      title: 'Associate Scientist',
      location: 'San Antonio, Texas, USA',
      dates: 'August 2015 - July 2016',
      description: 'Do lots of chemistry and generate reports about it.'
    }
  ],
  display: () => console.log('Display function of work section. 😄')
};

const projects = {
  projects: [
    {
      title: 'Restaurant Reviews App',
      dates: 'November 2018',
      description: 'A web app providing information about restaurants in different locations.',
      images: 'N/A'
    },
    {
      title: 'Arcade Game',
      dates: 'August 2018 - September 2018',
      description: 'A timed game that involves collecting tokens while evading enemies.',
      images: 'N/A'
    },
    {
      title: 'Memory Game',
      dates: 'August 2018',
      description: 'A game that tests the player\'s ability to remember things.',
      images: 'N/A'
    }
  ],
  display: () => console.log('Display function of projects section. 😄')
};
