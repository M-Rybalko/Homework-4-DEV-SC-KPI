const test = require('../test.js');
const task1 = require('../Tasks/1-one.js');

const test1 = () => {
  const id = Symbol('id');

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
  ]
  
  console.log('Task 1')
  test(cases);
}

test1()

module.exports = test1;