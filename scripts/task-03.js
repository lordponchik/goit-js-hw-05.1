console.log('task-03');
console.log('');

import users from '../users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(({ name }) => name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
