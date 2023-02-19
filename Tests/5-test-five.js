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
  };

  const output = {
    username: 'Max Rybalko',
    email: 'mail@gmail.com',
    averageMark: 97,
    subjects: {
      op: 96,
      escp: 94,
      math_an: 95,
      ads: 100,
      history: 100,
    }
  };

  const cases = [
    [ task5.makeAccount(student), output ],
    [ Object.keys(task5.passwords).length, 1 ],
    [ task5.students.size, 1 ],
    [ task5.getMark('Max Rybalko', 'qwerty'), 97 ],
    [ task5.makeUsername('           Oleg       ', '  Olzhych   '), 'Oleg Olzhych'],
    [ task5.makeUsername('Oleg...', 'Olzhyc'), 'Oleg... Olzhyc']
  ]

  try {
    task5.getMark('Max Rybalko', 'qwerty11');
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

  const student1 = {
    name: 0,
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
  };

  const student2 = {
    name: 'Max',
    surname: 'Rybalko',
    grade: '999',
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
  };

  const student3 = {
    name: 'Max',
    surname: 'Rybalko',
    grade: 1,
    institute: 121,
    security: {
      password: 'qwerty',
      email: 'mail@gmail.com'
    },
    op: 96,
    escp: 94,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const student4 = {
    name: 'Max',
    surname: 'Rybalko',
    grade: 1,
    institute: 'FICT',
    security: {
      password: 'qwerty',
      email: 'mail@gmail.com'
    },
    op: 96,
    escp: NaN,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const student5 = {
    name: 'Max',
    surname: 'Rybalko',
    grade: 1,
    institute: 'FICT',
    security: {
      password: 'qwerty',
    },
    op: 96,
    escp: NaN,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const student6 = {
    name: 'Max',
    surname: 'Rybalko',
    grade: 1,
    institute: 'FICT',
    op: 96,
    escp: NaN,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const subjects1 = {
    op: 96,
    escp: NaN,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const subjects2 = {
    op: 96,
    escp: Infinity,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const subjects3 = {
    op: 96,
    escp: '94',
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const subjects4 = {
    op: 96,
    escp: 94.44,
    math_an: 95,
    ads: 100,
    history: 100, 
  };

  const subjects5 = {};

  const cases1 = [
    [task5.makeAverageMark(subjects4), 97],
    [task5.makeAverageMark(subjects5), 0],
  ];

  try {
    task5.makeAccount(student1);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAccount(student2);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAccount(student3);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAccount(student4);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAccount(student5);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAccount(student6);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAverageMark(subjects1);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAverageMark(subjects2);
  } catch {
    passed++;
    total++;
  }

  try {
    task5.makeAverageMark(subjects3);
  } catch {
    passed++;
    total++;
  }

  passed += test(cases);
  total += cases.length;
  
  passed += test(cases1);
  total += cases1.length;

  console.log('Task 5');
  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test5;
