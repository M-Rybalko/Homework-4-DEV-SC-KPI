'use strict';

const test = require('../test.js');
const task5 = require('../Tasks/5-five.js');

const test5 = () => {
  let passed = 0;
  let total = 0;

  const student = {
    name: 'Max',
    surname: 'Rybalko',
    grade: 1,
    institute: 'FICT',
    security: {
      password: 'qwerty',
      email: 'mail@gmail.com'
    },
    op: 96,
    escp: 94,
    math_an: 95,
    ads: 100,
    history: 100, 
  }

  const output = {
    username: 'MaxRybalko',
    email: 'mail@gmail.com',
    averageMark: 97,
    subjects: {
      op: 96,
      escp: 94,
      math_an: 95,
      ads: 100,
      history: 100,
    }
  }

  const cases = [
    [ task5.makeAccount(student), output ],
    [ Object.keys(task5.passwords).length, 1 ],
    [ task5.students.size, 1 ],
    [ task5.getMark('MaxRybalko', 'qwerty'), 97 ],
  ]

  try {
    task5.getMark('MaxRybalko', 'qwerty11');
  } catch {
    passed++;
    total++;
  }

  try {
    task5.getMark('MaxxxxRybalko', 'qwerty');
  } catch {
    passed++;
    total++;
  }

  passed += test(cases);
  total += cases.length;
  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test5;