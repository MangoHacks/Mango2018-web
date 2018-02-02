const schedule = [
  {
    title: 'Dinner',
    description: '',
    startTime: 'Fri, 7:00 PM',
    endTime: 'Fri, 8:30 PM',
    location: 'PG6 Halfmoon',
    tags: 'Food'
  },
  {
    title: 'Registration',
    description: '',
    startTime: 'Fri, 6:00 PM',
    endTime: 'Fri, 7:00 PM',
    location: 'PG6 Atrium',
    tags: 'Activity'
  },
  {
    title: 'Opening Ceremony',
    description: '',
    startTime: 'Fri, 8:30 PM',
    endTime: 'Fri, 9:30 PM',
    location: 'Sippa 125',
    tags: 'Activity'
  },
  {
    title: 'Onsite Interviews',
    description: '',
    startTime: 'Fri, 9:30 PM',
    endTime: 'Fri, 10:30 PM',
    location: 'PG6 Advising',
    tags: 'Activity'
  },
  {
    title: 'Team Building',
    description: '',
    startTime: 'Fri, 9:30 PM',
    endTime: 'Fri, 10:00 PM',
    location: 'PG6 Atrium',
    tags: 'Activity'
  },
  {
    title: 'Hacking Begins',
    description: '',
    startTime: 'Fri, 10:00PM',
    endTime: 'Sun, 7:00 AM',
    location: 'PG6',
    tags: 'Activity'
  },
  {
    title: 'Server Side Socket Session',
    description: '',
    startTime: 'Fri, 9:30 PM',
    endTime: 'Fri, 10:30 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Prototyping using Ruby & Ruby on Rails',
    description: '',
    startTime: 'Fri, 10:30 PM',
    endTime: 'Fri, 11:15 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Intro to GIT',
    description: '',
    startTime: 'Fri, 11:15 PM',
    endTime: 'Sat, 12:00 AM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Midnight Snack',
    description: '',
    startTime: 'Fri, 11:50 AM',
    endTime: 'Sat, 12:10 AM',
    location: 'PG6 Atrium',
    tags: 'Food'
  },
  {
    title: 'HTML/CSS',
    description: '',
    startTime: 'Sat, 12:00 AM',
    endTime: 'Sat, 12:45 AM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Javascript and APIs',
    description: '',
    startTime: 'Sat, 12:45 AM',
    endTime: 'Sat, 1:30 AM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'React',
    description: '',
    startTime: 'Sat, 1:30 AM',
    endTime: 'Sat, 2:15 AM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Hardware Lab',
    description: '',
    startTime: 'Sat, 2:00 AM',
    endTime: 'Sat, 7:00 AM',
    location: 'PG6 Advising',
    tags: ''
  },
  {
    title: 'Breakfast',
    description: '',
    startTime: 'Sat, 7:30 AM',
    endTime: 'Sat, 9:00 AM',
    location: 'PG6 Halfmoon',
    tags: 'Food'
  },
  {
    title: 'Startups',
    description: '',
    startTime: 'Sat, 10:00 AM',
    endTime: 'Sat, 11:00 AM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Functional Programming - Java',
    description: '',
    startTime: 'Sat, 11:15 AM',
    endTime: 'Sat, 12:00 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Lunch',
    description: '',
    startTime: 'Sat, 12:30 PM',
    endTime: 'Sat, 1:30 PM',
    location: 'PG6 Halfmooon',
    tags: 'Food'
  },
  {
    title: 'Flask & Python',
    description: '',
    startTime: 'Sat, 2:00 PM',
    endTime: 'Sat, 2:45 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: '4 Square',
    description: '',
    startTime: 'Sat, 3:30 PM',
    endTime: 'Sat, 4:45 PM',
    location: 'PG6 Parking Garage',
    tags: 'Workshop'
  },
  {
    title: 'UI',
    description: '',
    startTime: 'Sat, 3:30 PM',
    endTime: 'Sat, 4:15 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'ReasonML - Javascript developers',
    description: '',
    startTime: 'Sat, 4:15 PM',
    endTime: 'Sat, 5:00 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Predicting stock prizes - Machine Learning',
    description: '',
    startTime: 'Sat, 5:00 PM',
    endTime: 'Sat, 5:45 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Salsa',
    description: '',
    startTime: 'Sat, 5:45 PM',
    endTime: 'Sat, 6:25 PM',
    location: 'PG6 116',
    tags: 'Activity'
  },
  {
    title: 'Dinner',
    description: '',
    startTime: 'Sat, 7:00 PM',
    endTime: 'Sat, 8:30 PM',
    location: 'PG6 Halfmoon',
    tags: 'Food'
  },
  {
    title: 'Deployment',
    description: '',
    startTime: 'Sat, 8:30 PM',
    endTime: 'Sat, 9:30 PM',
    location: 'PG6 115',
    tags: 'Workshop'
  },
  {
    title: 'Ladies Storm Hackathons',
    description: '',
    startTime: 'Sat, 9:00 PM',
    endTime: 'Sat, 10:00 PM',
    location: 'PG6 115',
    tags: 'Activity'
  },
  {
    title: 'Cup Stacking',
    description: '',
    startTime: 'Sat, 10:30 PM',
    endTime: 'Sat, 11:00 PM',
    location: 'PG6 Atrium',
    tags: 'Activity'
  },
  {
    title: 'Midnight Snack',
    description: '',
    startTime: 'Sun, 12:00 AM',
    endTime: 'Sun, 12:45 AM',
    location: 'PG6 Atrium',
    tags: 'Food'
  },
  {
    title: 'Soylent Pong',
    description: '',
    startTime: 'Sun, 1:00 AM',
    endTime: 'Sun, 1:30 AM',
    location: 'PG6 Atrium',
    tags: 'Food'
  },
  {
    title: 'Devpost Submissions Due',
    description: '',
    startTime: 'Sun, 7:00 AM',
    endTime: 'N/A',
    location: 'PG6',
    tags: 'Activity'
  },
  {
    title: 'Breakfast',
    description: '',
    startTime: 'Sun, 8:15 AM',
    endTime: 'Sun, 9:00 AM',
    location: 'PG6 Halfmoon',
    tags: 'Food'
  },
  {
    title: 'Hacking Ends',
    description: '',
    startTime: 'Sun, 9:00 AM',
    endTime: 'N/A',
    location: 'PG6 112',
    tags: 'Activity'
  },
]

export default schedule;
