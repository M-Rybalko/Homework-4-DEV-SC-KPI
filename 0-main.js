'use strict';

const t1 = require('./Tests/1-test-one.js');
const t2 = require('./Tests/2-test-two.js');
const t3 = require('./Tests/3-test-three.js');
const t4 = require('./Tests/4-test-four.js');
const t5 = require('./Tests/5-test-five.js');
const t6 = require('./Tests/6-test-six.js');

const tasks = [t1, t2, t3, t4, t5, t6];

for (const task of tasks) {
  if (tasks.indexOf(task) === 1) {
    task(1);
    task(2);
  }
  task();
}