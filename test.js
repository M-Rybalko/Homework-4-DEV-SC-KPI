'use strict';

const test = (cases) => {
  let passed = 0;

  const assert = (fn, res) => {

    try {
      if (
        typeof fn === typeof res && 
        JSON.stringify(fn) === JSON.stringify(res)
      ) {
        passed++;
      } else {
        throw new Error;
      }
    } catch (err) {
      console.log('Caught error on test ' + (passed + 1))
    }
  }

  for (const test of cases) {
    assert(...test);
  }

  return passed;
}

module.exports = test;