'use strict';

const test = require('../test.js');
const task4 = require('../Tasks/4-four.js');

const test4 = () => {
  let passed = 0;
  let total = 0;

  const obj = {b: 2};

  const map = new Map;
  map.set('a', 1);
  map.set(true, 1);
  map.set('smth', 'smone');
  map.set(obj, 'object');

  task4.set('a', 1);
  task4.set(true, 1);
  task4.set('smth', 'smone');
  task4.set(obj, 'object');

  const mapObject = Object.fromEntries(map)
  const testSet = [
    [task4.object, mapObject]
  ];
  passed += test(testSet);
  total += testSet.length;

  const cases = [
    [ task4.get(true), map.get(true) ],
    [ task4.get(obj), map.get(obj) ],
    [ task4.get('smone'), map.get('smone') ],
    [ task4.has('smth'), map.has('smth') ],
    [ task4.has('false'), map.has('false') ],
    [ task4.has(obj), map.has(obj) ],
    [ task4.size(), map.size],
    [ task4.keys(), Object.keys(mapObject) ],
    [ task4.values(), Object.values(mapObject) ],
    [ task4.entries(), Object.entries(mapObject) ],
    [ task4.delete(obj), map.delete(obj)],
    [ task4.object, Object.fromEntries(map) ],
  ];
  passed += test(cases);
  total += cases.length;

  task4.clear();
  map.clear();
  const clearTest = [
    [ task4.object, Object.fromEntries(map) ]
  ];
  passed += test(clearTest);
  total += clearTest.length;

  console.log('Task 4');
  console.log('Passed: ' + passed + ' of ' + total);
}

module.exports = test4;
