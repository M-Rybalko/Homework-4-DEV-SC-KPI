'use strict';

const test = (cases) => {
  let passed = 0;

  const assert = (fn, res) => {

    if (fn === res) {
      passed++;
    } 

  }

  for (const test of cases) {
    assert(...test);
  }

  console.log('Passed: ' + passed + ' of ' + cases.length);
}

module.exports = test;