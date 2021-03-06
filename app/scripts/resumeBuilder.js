/*
This is empty on purpose! Your code to build the resume will go here.
 */
const model = {
  bio: {
    name: 'Uche Ozoemena',
    role: 'Web Developer',
    contacts: {
      mobile: '0123456789',
      email: 'codewithoz@outlook.com',
      github: 'CodeWithOz',
      location: 'Abuja, Nigeria'
    },
    welcomeMessage: 'Greetings! I am Uche and I am happy to meet you!',
    skills: [
      'jQuery',
      'Test-Driven Development',
      'Object-Oriented Programming',
      'Functional Programming',
      'Responsive Web Design',
      'Offline Capability with Service Worker API'
    ],
    biopic: 'images/prof_selfie_2.jpg'
  },

  education: {
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
        onlineDate: 'May 2018 - July 2018',
        url: 'https://www.udacity.com/google-africa-scholarships'
      },
      {
        title: 'Front End Nanodegree',
        school: 'Udacity',
        onlineDate: 'July 2018 - November 2018',
        url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
      }
    ]
  },

  work: [
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

  projects: [
    {
      title: 'Restaurant Reviews App',
      dates: 'November 2018',
      description: 'A web app providing information about restaurants in different locations.',
      images: ''
    },
    {
      title: 'Arcade Game',
      dates: 'August 2018 - September 2018',
      description: 'A timed game that involves collecting tokens while evading enemies.',
      images: ''
    },
    {
      title: 'Memory Game',
      dates: 'August 2018',
      description: 'A game that tests the player\'s ability to remember things.',
      images: ''
    }
  ]
};

const octopus = {
  getBioData() {
    return model.bio;
  },
  getWorkData() {
    return model.work;
  },
  getProjectsData() {
    return model.projects;
  },
  getEducationData() {
    return model.education;
  }
};

const view = {
  header: {
    template: {
      name: '<h1 id="name">%data%</h1>',
      role: '<span>%data%</span><hr>',
      mobile: '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
      email: '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
      github: '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
      location: '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
      biopic: '<img src="%data%" class="biopic">',
      welcomeMessage: '<span class="welcome-message">%data%</span>',
      skillsStart: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',
      skills: '<li class="flex-item"><span class="white-text">%data%</span></li>'
    },
    render() {
      const data = octopus.getBioData();
      const $header = $('#header');

      // bind this object to replaceData
      const replaceData = view.replaceData.bind(this);

      // prepend the role first so that the name will be
      // prepended above it
      const role = replaceData('role', data.role);
      $header.prepend(role);
      const name = replaceData('name', data.name);
      $header.prepend(name);

      // add each contact to the header
      const $contacts = $('#topContacts');
      $.each(data.contacts, (key, value) => {
        const entry = replaceData(key, value);
        $contacts.append(entry);
      });

      // add pic
      const biopic = replaceData('biopic', data.biopic);
      $header.append(biopic);

      // add Skills at a Glance section
      const msg = replaceData('welcomeMessage', data.welcomeMessage);
      $header.append(msg);
      $header.append(this.template.skillsStart);
      const $skillsList = $('#skills');
      for (const skill of data.skills) {
        const entry = replaceData('skills', skill);
        $skillsList.append(entry);
      }
    }
  },
  work: {
    template: {
      start: '<div class="work-entry"></div>',
      employer: '<a href="#">%data%',
      title: ' - %data%</a>',
      dates: '<div class="date-text">%data%</div>',
      location: '<div class="location-text">%data%</div>',
      description: '<p><br>%data%</p>'
    },
    render() {
      const data = octopus.getWorkData();
      const $workExp = $('#workExperience');

      // bind this object to replaceData
      const replaceData = view.replaceData.bind(this);

      // add work experience
      data.forEach(workExp => {
        $workExp.append(this.template.start);
        const $entry = $('.work-entry').last(),
          employer = replaceData('employer', workExp.employer),
          title = replaceData('title', workExp.title),
          heading = employer + title,

          // array of items to be appended to the entry
          toAppend = [heading];
        toAppend.push(replaceData('dates', workExp.dates));
        toAppend.push(replaceData('location', workExp.location));
        toAppend.push(replaceData('description', workExp.description));

        // append the items
        toAppend.forEach(item => {
          $entry.append(item);
        });
      });
    }
  },
  projects: {
    template: {
      start: '<div class="project-entry"></div>',
      title: '<a href="#">%data%</a>',
      dates: '<div class="date-text">%data%</div>',
      description: '<p><br>%data%</p>',
      images: '<img src="%data%">'
    },
    render() {
      const data = octopus.getProjectsData();
      const $projects = $('#projects');

      // bind this object to replaceData
      const replaceData = view.replaceData.bind(this);

      // add projects
      data.forEach(project => {
        $projects.append(this.template.start);
        const $entry = $('.project-entry').last(),

          // array of items to be appended to the entry
          toAppend = [];
        toAppend.push(replaceData('title', project.title));
        toAppend.push(replaceData('dates', project.dates));
        toAppend.push(replaceData('description', project.description));
        toAppend.push(replaceData('images', project.images));

        // append the items
        toAppend.forEach(item => {
          $entry.append(item);
        });
      });
    }
  },
  education: {
    template: {
      start: '<div class="education-entry"></div>',
      name: '<a href="#">%data%',
      degree: ' -- %data%</a>',
      dates: '<div class="date-text">%data%</div>',
      location: '<div class="location-text">%data%</div>',
      major: '<em><br>Major: %data%</em>',
      onlineStart: '<h3>Online Classes</h3>',
      title: '<a href="#">%data%',
      school: ' - %data%</a>',
      onlineDate: '<div class="date-text">%data%</div>',
      url: '<br><a href="#">%data%</a>'
    },
    render() {
      const data = octopus.getEducationData();
      const $education = $('#education');

      // bind this object to replaceData
      const replaceData = view.replaceData.bind(this);

      // add schools
      data.schools.forEach(school => {
        $education.append(this.template.start);
        const $entry = $('.education-entry').last(),
          name = replaceData('name', school.name),
          degree = replaceData('degree', school.degree),
          heading = name + degree,

          // array of items to be appended to the entry
          toAppend = [heading];
        toAppend.push(replaceData('dates', school.dates));
        toAppend.push(replaceData('location', school.location));
        school.majors.forEach(major => {
          toAppend.push(replaceData('major', major));
        });

        // append the items
        toAppend.forEach(item => {
          $entry.append(item);
        });
      });

      // add online courses
      $education.append(this.template.onlineStart);
      for (const course of data.onlineCourses) {
        const title = replaceData('title', course.title),
          school = replaceData('school', course.school),
          heading = title + school,

          // array of items to be appended to the entry
          toAppend = [heading];
        toAppend.push(replaceData('onlineDate', course.onlineDate));
        toAppend.push(replaceData('url', course.url));

        // append the items
        toAppend.forEach(item => {
          $education.append(item);
        });
      }
    }
  },
  replaceData(propName, replacement) {
    return this.template[propName].replace('%data%', replacement);
  },
  render() {
    this.header.render();
    this.work.render();
    this.projects.render();
    this.education.render();
  },
  init() {
    this.render();
  }
};

$(document).ready(function() {
  view.init();
});
