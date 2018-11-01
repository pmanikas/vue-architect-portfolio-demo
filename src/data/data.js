import avatar from '@assets/img/face.png';

export let owner = {
  name: 'Lefteris Kapsalas',
  description: 'Hello. My name is Lefteris Kapsalas, I’m an architect from Thessaloniki, Greece and recently, I moved to Edinburgh. I love art & design and strive to learn more and continue to grow as a designer. This is a collection of my work over the last few years. Enjoy!',
  avatar: avatar,
  email: 'info@kapsalas-portfolio.eu',
  skype: 'lefteris-kapsalas',
  phone: '07555-471228',
  developer: 'Pandelis Manikas',
  developerWebsite: 'https://pantelismanikas.eu',
  address: '5(pf4) Beaverhall Road Edinburgh, EH7 4JQ'
}

export let cv = {
  education: {
    id: '0001',
    name: 'Democritus University of Thrace (DUTH)',
    area: 'Xanthi Greece',
    date: '2006 - 2014',
    description: '5 year Diploma Degree (Bachelor & Master) <br> Dpt Architectural Engineering'
  },
  jobs:[
    {
      id: '0001',
      name: 'INTERIOR DESIGN PROJECT AS A FREELANCE, APARTMENT',
      area: 'Athens, Greece',
      date: 'Summer 2015',
      description: [
        'Determine the client’s goals and requirements of the project.', 'Developing initial ideas and sketching preliminary design plans.', 'Considering materials and costs according to a set low budget.', 'Prepare final plans, using computer applications.', 
        'Supervising work on site.'
      ]
    },
    {
      id: '0002',
      name: 'ASSISTANT ARCHITECT - DIMITRIS SALTAMANIKAS',
      area: 'Athens, Greece',
      date: 'SEP 2014 – APR 2015',
      description: [
        'Creating building designs and highly detailed drawings both by hand and by using specialist computer-aided design applications.', 
        'Required to learn new skills very quickly and on site.', 
        'Built physical models.', 
        'Manage and execute design assignments in a timely manner.', 'Participate in team meetings to coordinate design options and ideas.'
      ]
    },
    {
      id: '0003',
      name: 'ARCHITECTURAL INTERN - GIWRGOS PAPADOPOULOS',
      area: 'Xanthi, Greece',
      date: 'MAY - OCT 2013',
      description: [
        'Work in a team of four on a residential building project.', 
        'Supported and assisted lead architect in all phases of a major.', 
        'Working closely with other professionals like surveyors and civil engineers.', 
        'Drafting of building designs using AutoCAD, SketchUp, and Photoshop.', 'Built physical models.', 
        'Helping to prepare company tender applications.'
      ]
    },
    {
      id: '0004',
      name: 'CUSTOMER SERVICE / HOSPITALITY WHILE STUDING',
      area: 'Xanthi, Greece',
      date: '2007- 2010'
    }
  ],
  keySkills: [
    'Ability to work in a team.',
    'The motivation to learn new knowledge and skills.',
    'An analytical mind with excellent problem-solving ability.',
    'Excellent ability to make and analyze comprehensive architectural designs.', 
    'Good at meeting deadlines.', 
    'Ability to keep cool under pressure.', 
    'High levels of creativity, imagination and vision.', 
    'Having the ability to think and create in three dimensions.'
  ],
  skillsSum: [
    {
      name: 'Digital',
      list: [
        {
          skill: 'SketchUp',
          level: '10'
        },
        {
          skill: 'Photoshop',
          level: '10'
        },
        {
          skill: 'Autocad (2D)',
          level: '9'
        },
        {
          skill: 'Autocad (3D)',
          level: '6'
        },
        {
          skill: 'Revit',
          level: '7'
        },
        {
          skill: 'Illustrator',
          level: '7'
        },
        {
          skill: 'InDesign',
          level: '7'
        },
        {
          skill: 'VRay',
          level: '8'
        }
      ]
    },
    {
      name: 'Analog',
      list: [
        {
          skill: 'Sketching'
        },
        {
          skill: 'Hand Drawing'
        },
        {
          skill: 'Model Making'
        }
      ]
    }
  ],
  recognition: [
    {
      date: 2010,
      title: 'Project published, Parasitic house. (p.67)',
      links: [
        'https://issuu.com/students.arch.duth/docs/1oteyxosergasion',
        'https://issuu.com/students.arch.duth/docs/1oteyxosergasion'
      ]
    },
    {
      date: 2011,
      title: 'Project published, Landscape project. (p.21)',
      links: [
        'https://issuu.com/students.arch.duth/docs/2oteyxosergasion'
      ]
    },
    {
      date: 2014,
      title: 'Thesis Published',
      links: [
        'https://goo.gl/CWu0fd'
      ]
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'Intermediate'
    },
    {
      name: 'Greek',
      level: 'Native'
    },
    {
      name: 'Italian',
      level: 'Basics'
    },
  ],
  others: [
    '2-YEAR VOLUNTEERING AT RED CROSS ',
    'FIRST AID TRAINED'
  ]
}