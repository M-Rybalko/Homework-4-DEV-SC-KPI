'use strict';

const test = require('../test.js');
const task6 = require('../Tasks/6-six.js');

const test6 = () => {
  let passed = 0;
  let total = 0;

  const cases1 = [
    [`${task6}`, 'Sumy: 3;\nKyiv: 4;\nOslo: -18;\nJakarta: 22;\nVancouver: -21.'],
    [+task6, -2],
  ]
  passed += test(cases1);
  total += cases1.length;

  task6['Cologne'] = '4';

  const cases2 = [
    [`${task6}`, 'Sumy: 3;\nKyiv: 4;\nOslo: -18;\nJakarta: 22;\nVancouver: -21;\nCologne: 4.'],
    [+task6, -1],
  ]
  passed += test(cases2);
  total += cases2.length;

  console.log('Task 6');
  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test6;