console.log('task-01');
console.log('');

import users from '../users.js';

const getUserNames = users => {
  return users.map(({ name }) => name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
