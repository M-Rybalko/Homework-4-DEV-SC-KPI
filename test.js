'use strict';

const test = (cases) => {
  let passed = 0;

  const assert = (fn, res) => {

    if (typeof fn === typeof res && 
    JSON.stringify(fn) === JSON.stringify(res)) {
      passed++;
    }

  }

  for (const test of cases) {
    assert(...test);
  }

  console.log('Passed: ' + passed + ' of ' + cases.length);
}

module.exports = test;