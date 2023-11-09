console.log('task-10');
console.log('');

import users from '../users.js';

const getSortedUniqueSkills = users => {
  return users
    .flatMap(({ skills }) => skills)
    .filter((el, i, arr) => arr.indexOf(el) === i)
    .sort((a, b) => a.localeCompare(b));
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
