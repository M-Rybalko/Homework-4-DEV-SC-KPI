'use strict';

const test = require('../test.js');
const task3 = require('../Tasks/3-three.js');

const test3 = () => {
  let passed = 0;
  let total = 0;

  // Tests for invalid variant or input

  task3.input = false;
  task3.variant = 0;

  let res = [];
  for (const char of task3) {
    res.push(char);
  }

  const cases0 = [ [res, ['f', 'a', 'l', 's', 'e'] ] ];
  passed += test(cases0);
  total += cases0.length;

  task3.input = 'abcd';
  res = [];
  for (const char of task3) {
    res.push(char);
  }

  const cases1 = [ [res, ['a', 'b', 'c', 'd'] ] ];
  passed += test(cases1);
  total += cases1.length;

  task3.variant = 'qwer';

  res = [];
  for (const char of task3) {
    res.push(char);
  }

  const cases2 = [ [res, ['a', 'b', 'c', 'd'] ] ];
  passed += test(cases2);
  total += cases2.length;

  // Test for variant 1
 
  task3.variant = '1';
  task3.input = `Money trees...`;
  res = []; 
  for (const char of task3) {
    res.push(char);
  }
  const cases3 = [ [res, ['M', 'n', 'y', 't', 'e', 's', '.'] ] ];
  passed += test(cases3);
  total += cases3.length;

  // Test for variant 2

  task3.variant = 2;
  task3.input = `Money trees is..... the perfect place`;
  res = []; 
  for (const char of task3) {
    res.push(char);
  }
  const cases4 = [ [res, ['Money', 'trees', 'is', 'the', 'perfect', 'place'] ] ];
  passed += test(cases4);
  total += cases4.length;

  // Test for variant 3

  task3.variant = 3;
  task3.input = `Money! trees is..... the perfect? place.`;
  res = []; 
  for (const char of task3) {
    res.push(char);
  }
  const cases5 = [ [res, ['Money', 'trees is', 'the perfect', 'place'] ] ];
  passed += test(cases5);
  total += cases5.length;

  // Test for variant 4

  task3.input = `MOney trEes...`
  task3.variant = 4;
  res = []; 
  for (const char of task3) {
    res.push(char);
  }
  const cases6 = [ [res, ['O', 'e', 'y', 'E', 'e'] ] ];
  passed += test(cases6);
  total += cases6.length;

  console.log('Task 3');
  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test3;
