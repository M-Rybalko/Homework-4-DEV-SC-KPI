'use strict';

const test = require('../test.js');
const task1 = require('../Tasks/1-one.js');

const test1 = () => {
  const id = Symbol('id');
  let passed = 0;
  let total = 0;
  const cases = [
    [
      task1({
        name: 'Alex',
        age: 23,
        [id]: 'id',
      }), 2
    ],
    [
      task1({
        name: 'Alex',
        age: 23,
        id: 'id',
      }), 3
    ],
  ];
  
  console.log('Task 1');
  passed += test(cases);
  total += cases.length;
  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test1;
