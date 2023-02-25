'use strict';

const test = require('../test.js');
const task2 = require('../Tasks/2-two.js');

const test2 = (variant) => {
  if (variant === 1) {
    let passed = 0;
    let total = 0;

    const cases = [
      // Tests for empty array
      [ task2.variant1.getAnimalCount(), 0 ],
      [ task2.variant1.getAnimalCount('monkey'), 0 ],

      [ task2.variant1.getAnimalsByCount(), [] ],
      [ task2.variant1.getAnimalsByCount(5), [] ],

      [ task2.variant1.deleteAnimal(), ],
      [ task2.variant1.deleteAnimal('peasant'), ],

      [ task2.variant1.checkAnimal(), false ],
      [ task2.variant1.checkAnimal('dog'), false ],

      [ task2.variant1.addAnimal('cat', 15), ],
      [ task2.variant1.addAnimal('dog'), ],
      [ task2.variant1.addAnimal('lion', NaN), ],
      [ task2.variant1.addAnimal('lion', 3.56), ],
      [ task2.variant1.addAnimal(false, '2'), ],
      [ task2.variant1.deleteAnimal(false), ],
      [ task2.variant1.deleteAnimal('no one'), ],
      // Tests for filled array
      [ task2.variant1.getAnimalCount('dog'), 1 ],
      [ task2.variant1.getAllAnimalsCount(), 20 ],
      [ task2.variant1.getAnimalsByCount(1), [ 'dog', ] ],
      [ task2.variant1.getAnimalsByCount(1.99), [ 'dog', ] ],
      [ task2.variant1.getAnimalsByCount('1.99'), [ 'dog', ] ],
      [ task2.variant1.getAnimalsByCount(NaN), [] ],
      [ task2.variant1.getAnimalsByCount(Infinity), [] ],

      [ task2.variant1.getSortedZoo(), 
        [ {name: 'dog', count: 1}, {name: 'lion', count: 4}, {name: 'cat', count: 15} ] 
      ],

      [ task2.variant1.checkAnimal('cat'), true ],
      [ task2.variant1.checkAnimal('dog'), true ],
      [ task2.variant1.checkAnimal('lion'), true ],

      [ task2.variant1.deleteAnimal('dog'), ],
      [ task2.variant1.getAnimals(), 
        [ {name: 'cat', count: 15}, {name: 'lion', count: 4} ] 
      ],
    ];
    console.log('Task 2 Variant 1');
    passed += test(cases);
    total += cases.length;
    console.log('Passed: ' + passed + ' of ' + total);
  }

  if (variant === 2) {
    let passed = 0;
    let total = 0;

    const cases = [
      // Tests for empty array
      [ task2.variant2.getAnimalCount(), 0 ],
      [ task2.variant2.getAnimalCount('monkey'), 0 ],

      [ task2.variant2.getAnimalsByCount(), [] ],
      [ task2.variant2.getAnimalsByCount(5), [] ],
      
      [ task2.variant2.deleteAnimal(), ],
      [ task2.variant2.deleteAnimal('peasant'), ],

      [ task2.variant2.checkAnimal(), false ],
      [ task2.variant2.checkAnimal('dog'), false ],

      [ task2.variant2.addAnimal('cat', 15), ],
      [ task2.variant2.addAnimal('dog'), ],
      [ task2.variant2.addAnimal('lion', NaN), ],
      [ task2.variant2.addAnimal('lion', 3.56), ],
      [ task2.variant2.addAnimal(false, '2'), ],
      [ task2.variant2.deleteAnimal(false), ],
      [ task2.variant2.deleteAnimal('no one'), ],
      // Tests for filled array
      [ task2.variant2.getAnimalCount('dog'), 1 ],
      [ task2.variant2.getAllAnimalsCount(), 20 ],
      [ task2.variant2.getSortedZoo(), 
        [ {name: 'dog', count: 1}, {name: 'lion', count: 4}, {name: 'cat', count: 15} ] 
      ],
      [ task2.variant2.getAnimalsByCount(1), [ 'dog' ] ],
      [ task2.variant2.getAnimalsByCount(1.99), [ 'dog', ] ],
      [ task2.variant2.getAnimalsByCount('1.99'), [ 'dog', ] ],
      [ task2.variant2.getAnimalsByCount(NaN), [] ],
      [ task2.variant1.getAnimalsByCount(Infinity), [] ],

      [ task2.variant2.checkAnimal('cat'), true ],
      [ task2.variant2.checkAnimal('dog'), true ],
      [ task2.variant2.checkAnimal('lion'), true ],

      [ task2.variant2.deleteAnimal('dog'), ],
      [ task2.variant2.getAnimals(), 
        [ {name: 'cat', count: 15}, {name: 'lion', count: 4} ] 
      ],
    ];

    console.log('Task 2 Variant 2');
    passed += test(cases);
    total += cases.length;
    console.log('Passed: ' + passed + ' of ' + total);
  }
}

module.exports = test2;
