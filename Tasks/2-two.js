'use strict';

const task2 = {
  variant1: {
    zoo: [],

    getAnimalCount(species) {
      const requested = this.zoo.find(animal => animal.name === species);
      return requested ? requested.count : 0;
    },

    getAllAnimalsCount() {
      let res = 0;
      this.zoo.map( (animal) => res += animal.count);
      return res;
    },

    getAnimalsByCount(amount) {
      amount = parseInt(amount);
      if ( isNaN(amount) ) {
        amount = 0;
      }

      let res = [];
      res = this.zoo.filter( (animal) => animal.count === amount);
      res = res.map( (animal) => animal.name);
      return res;
    },

    getSortedZoo() {
      const sorted = [...this.zoo].sort((a, b) => a.count - b.count);
      return sorted;
    },

    addAnimal(species, amount = 1) {
      typeof species !== 'string' ? species = species + '' : species;
      amount = parseInt(amount);
      if ( isNaN(amount) ) {
        amount = 1;
      }
      const animal = {
        name: species,
        count: amount,
      };
     
      if (this.zoo.some( (element) => element.name === species ) ) {
        const duplicate = this.zoo.find(animal => animal.name === species);
        duplicate.count += amount;
      } else this.zoo.push(animal);
      return undefined;
    },

    getAnimals() {
      return this.zoo;
    },

    deleteAnimal(name) {
      if (typeof name !== 'string') name = name + '';

      const searchFunc = (animal) => {
        return animal.name == name;
      }

      const toDelete = this.zoo.findIndex(searchFunc);
      if (toDelete !== -1) {
        this.zoo.splice(toDelete, 1);
      }
      return undefined;
    },

    checkAnimal(name) {
      
      const searchFunc = (animal) => {
        return animal.name === name;
      }

      return this.zoo.findIndex(searchFunc) === -1 ? false : true;
    },
  },

  variant2: {
    zoo: [],

    getAnimalCount(species) {
      for (const animal of this.zoo) {

        if(animal.name === species) return animal.count;
        
      }
      return 0;
    },

    getAllAnimalsCount() {
      let res = 0;

      for (const animal of this.zoo) {
        res += animal.count;
      }

      return res;
    },

    getAnimalsByCount(amount) {
      const res = [];
      amount = parseInt(amount);
      if ( isNaN(amount) ) {
        amount = 0;
      }

      for (const animal of this.zoo) {
        if (animal.count === amount) {
          res[res.length] = animal.name;
        }
      }

      return res;
    },

    getSortedZoo() {
      const sorted = [];
      for(const animal of this.zoo) {
        sorted[sorted.length] = animal;
      }

      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < (sorted.length - i - 1); j++) {

          if (sorted[j].count > sorted[j + 1].count) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1]
            sorted[j + 1] = temp; 
          }

        }
      }

      return sorted;
    },

    addAnimal(species, amount = 1) {
      typeof species !== 'string' ? species = species + '' : species;
      amount = parseInt(amount);

      if ( isNaN(amount) ) {
        amount = 1;
      }

      let present = false;
      
      const animal = {
        name: species,
        count: amount,
      }

      for (let current of this.zoo) {
        if (current.name === species) {
          current.count += amount;
          present = true;
        }
      }

      if (present === false) this.zoo[this.zoo.length] = animal;
      return undefined;
    },

    getAnimals() {
      return this.zoo;
    },

    deleteAnimal(name) {
      if (typeof name !== 'string') name = name + '';

      let deleted = 0;
      let current = 0;
      let copy = [];

      for (const animal of this.zoo) {
        copy[copy.length] = animal;
      }

      for (const animal of copy) {
        if (animal.name !== name) {
          this.zoo[current] = animal;
          current++;
        } else {
          deleted++
        }
      }

      this.zoo.length -= deleted;
      return;
    },

    checkAnimal(name) {

      for (const animal of this.zoo) {
        if (animal.name === name) return true
      }

      return false;
    },
  }
}

module.exports = task2;