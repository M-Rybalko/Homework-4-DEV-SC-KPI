'use strict';

const task6 = {
  sumy: 3,
  kyiv: 4,
  oslo: -18,
  jakarta: 22,
  vancouver: -21,

  [Symbol.toPrimitive](hint) {

    if (hint === 'string') {
      const cities = Object.keys(task6);
      let result = '';

      for (let i = 0; i < cities.length; i++) {
        let divider = ';\n';
        if (i + 1 === cities.length) divider = '.';
        const cityCapitalized = cities[i][0].toUpperCase() + cities[i].slice(1);
        const city = cityCapitalized + ': ' + task6[cities[i]] + divider; 
        result += city;
      }

      return result;
    } else if (hint === 'number') {
      const temperatures = Object.values(task6);
      const sum = temperatures.reduce((a, b) => +a + +b);
      return sum / temperatures.length;
    }
  }
}

module.exports = task6;