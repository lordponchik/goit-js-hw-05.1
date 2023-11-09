console.log('task-09');
console.log('');

import users from '../users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
