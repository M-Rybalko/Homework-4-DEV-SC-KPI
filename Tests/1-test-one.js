const test = require('../test.js');
const fn = require('../Tasks/1-one.js');

const id = Symbol('id');

const cases = [
  [
    fn({
      name: 'Alex',
      age: 23,
      [id]: 'id',
    }), 2
  ],
  [
    fn({
      name: 'Alex',
      age: 23,
      id: 'id',
    }), 3
  ],
]

test(cases);
