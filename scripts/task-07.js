console.log('task-07');
console.log('');

import users from '../users.js';

const calculateTotalBalance = users => {
  return users.reduce((total, { balance }) => {
    return (total += balance);
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
