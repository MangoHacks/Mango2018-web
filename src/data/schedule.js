const schedule = [
  {
    title: 'Dinner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 18, 0, 0),
    endTime: new Date(2018, 1, 2, 20, 30, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Registration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 19, 0, 0),
    endTime: new Date(2018, 1, 2, 20, 30, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Opening Ceremony',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 20, 30, 0),
    endTime: new Date(2018, 1, 2, 21, 30, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Onsite Interviews',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 21, 30, 0),
    endTime: new Date(2018, 1, 2, 22, 30, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Team Building',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 21, 30, 0),
    endTime: new Date(2018, 1, 2, 22, 0, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Hacking Begins',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 22, 0, 0),
    endTime: new Date(2018, 1, 4, 9, 0, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Server Side Socket Session',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 21, 30, 0),
    endTime: new Date(2018, 1, 2, 22, 30, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Prototyping using Ruby & Ruby on Rails',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 22, 30, 0),
    endTime: new Date(2018, 1, 2, 23, 15, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Intro to GIT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 23, 15, 0),
    endTime: new Date(2018, 1, 3, 0, 0, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Midnight Snack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 2, 23, 50, 0),
    endTime: new Date(2018, 1, 3, 0, 10, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'HTML/CSS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 0, 0, 0),
    endTime: new Date(2018, 1, 3, 0, 45, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Javascript and APIs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 0, 45, 0),
    endTime: new Date(2018, 1, 3, 1, 30, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 1, 30, 0),
    endTime: new Date(2018, 1, 3, 2, 15, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Hardware Lab',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 2, 0, 0),
    endTime: new Date(2018, 1, 3, 7, 0, 0),
    location: 'PG6 XXX',
    tags: ''
  },
  {
    title: 'Breakfast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 7, 30, 0),
    endTime: new Date(2018, 1, 3, 9, 0, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Startups',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 10, 0, 0),
    endTime: new Date(2018, 1, 3, 11, 0, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Functional Programming - Haskell',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 11, 15, 0),
    endTime: new Date(2018, 1, 3, 12, 0, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Lunch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 12, 30, 0),
    endTime: new Date(2018, 1, 3, 13, 30, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Flask & Python',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 14, 0, 0),
    endTime: new Date(2018, 1, 3, 14, 45, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: '4 Square',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 15, 30, 0),
    endTime: new Date(2018, 1, 3, 16, 15, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'UI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 15, 30, 0),
    endTime: new Date(2018, 1, 3, 16, 15, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Reason',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 16, 15, 0),
    endTime: new Date(2018, 1, 3, 17, 0, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Machine Learning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 17, 0, 0),
    endTime: new Date(2018, 1, 3, 17, 45, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Salsa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 17, 45, 0),
    endTime: new Date(2018, 1, 3, 18, 25, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Dinner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 19, 0, 0),
    endTime: new Date(2018, 1, 3, 20, 30, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Deployment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 20, 30, 0),
    endTime: new Date(2018, 1, 3, 21, 30, 0),
    location: 'PG6 XXX',
    tags: 'Workshop'
  },
  {
    title: 'Ladies Strom Hackathons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 21, 0, 0),
    endTime: new Date(2018, 1, 3, 22, 0, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Cup Stacking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 3, 22, 30, 0),
    endTime: new Date(2018, 1, 3, 23, 0, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Midnight Snack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 0, 0, 0),
    endTime: new Date(2018, 1, 4, 0, 45, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Soylent Pong',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 1, 0, 0),
    endTime: new Date(2018, 1, 4, 1, 30, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Werewolf',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 1, 30, 0),
    endTime: new Date(2018, 1, 4, 2, 15, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Devpost Submissions Due',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 7, 0, 0),
    endTime: new Date(2018, 1, 4, 7, 30, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Breakfast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 8, 15, 0),
    endTime: new Date(2018, 1, 4, 9, 0, 0),
    location: 'PG6 XXX',
    tags: 'Food'
  },
  {
    title: 'Hacking Ends',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 9, 0, 0),
    endTime: new Date(2018, 1, 4, 9, 0, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  },
  {
    title: 'Expo Debuts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    startTime: new Date(2018, 1, 4, 10, 0, 0),
    endTime: new Date(2018, 1, 4, 11, 30, 0),
    location: 'PG6 XXX',
    tags: 'Activity'
  }
]

export default schedule;
