'use strict';

const test = require('../test.js');
const task4 = require('../Tasks/4-four.js');

const test4 = () => {
  let passed = 0;
  let total = 0;

  const obj = {b: 2};
  task4.set('a', 1);
  task4.set(true, 1);
  task4.set('smth', 'smone');
  task4.set(obj, 'object');

  const testSet = [
    [ task4.object, 
      { a: 1, true: 1, smth: 'smone', '{"b":2}': 'object' } 
    ],
  ];
  passed += test(testSet);
  total += testSet.length;

  const cases = [
    [ task4.get('smth'), 'smone' ],
    [ task4.get(true), 1 ],
    [ task4.get('smone'), undefined ],
    [ task4.has('smth'), true ],
    [ task4.has(obj), true ],
    [ task4.has('false'), false ],
    [ task4.size(), 4],
    [ task4.keys(), Object.keys(task4.object) ],
    [ task4.values(), Object.values(task4.object) ],
    [ task4.entries(), Object.entries(task4.object) ],
    [ task4.delete(obj), true],
    [ task4.object, 
      { a: 1, true: 1, smth: 'smone' } 
    ],
  ];
  passed += test(cases);
  total += cases.length;

  const clearTest = [
    [ task4.clear(), ],
    [ task4.object, {} ]
  ];
  passed += test(clearTest);
  total += clearTest.length;

  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test4;
