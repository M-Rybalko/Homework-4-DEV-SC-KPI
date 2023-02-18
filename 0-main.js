'use strict';

const prompt = require('prompt-sync')();
const t1 = require('./Tests/1-test-one.js');
const t2 = require('./Tests/2-test-two.js');
const t3 = require('./Tests/3-test-three.js');
const t4 = require('./Tests/4-test-four.js');
const t5 = require('./Tests/5-test-five.js');
const t6 = require('./Tests/6-test-six.js');

const tasks = [t1, t2, t3, t4, t5, t6];

console.log(`Here you can run any task. Tasks 2 has 2 variants.
To run the variant you want enter it's number after the message
you can run as many tasks as you want. Enter word 'stop' when you want to stop`);

let message = undefined;
while (message !== 'stop') {
  message = prompt('Enter the task number (1-6): ');

  if (message !== 'stop') {
    if (message == 2) {
      let variant = parseInt( prompt('Enter a variant: ') );
      tasks[parseInt(message) - 1](variant);
    } else {
      tasks[parseInt(message) - 1]();
    }
  }
}
