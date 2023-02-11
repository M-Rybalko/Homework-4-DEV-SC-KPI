'use strict';

const task2 = {
  variant1: {
    zoo: [],

    getAnimalCount(species) {
      for (const animal of this.zoo) {

        if(animal.name === species) return animal.count;
        
      }
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

      for (const animal of this.zoo) {
        if (animal.count === amount) {
          res.push(animal.name);
        }
      }

      return res;
    },

    getSortedZoo() {
      const sorted = [...this.zoo].sort((a, b) => a.count - b.count);
      return sorted;
    },

    addAnimal(species, amount) {
      const animal = {
        name: species,
        count: amount,
      }
      this.zoo.push(animal);
      return this.zoo;
    },

    getAnimals() {
      return this.zoo;
    },

    deleteAnimal(name) {

      const searchFunc = (animal) => {
        return animal.name === name;
      }

      const toDelete = this.zoo.findIndex(searchFunc);
      this.zoo.splice(toDelete, 1);
      return this.zoo;
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

      for (const animal of this.zoo) {
        if (animal.count === amount) {
          res[res.length] = animal.name;
        }
      }

      return res;
    },

    getSortedZoo() {
      const sorted = this.zoo;

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

    addAnimal(species, amount) {
      const animal = {
        name: species,
        count: amount,
      }
      this.zoo[this.zoo.length] = animal;
      return this.zoo;
    },

    getAnimals() {
      return this.zoo;
    },

    deleteAnimal(name) {

      for (let i = 0; i < this.zoo.length; i++) {
        if (name === this.zoo[i].name) {
          const zooLeft = this.zoo;
          const zooRight = [];
          const newZoo = [];

          for (let j = i + 1; j < this.zoo.length; j++) {
            zooRight[zooRight.length] = this.zoo[j];
          }

          zooLeft.length = i;

          for (const arg of zooLeft) {
            newZoo[newZoo.length] = arg;
          }

          for (const arg of zooRight) {
            newZoo[newZoo.length] = arg;
          }

          this.zoo = newZoo;
        }
      }

      return this.zoo;
    },

    checkAnimal(name) {

      for (const animal of this.zoo) {
        if (animal.name === name) return true
      }

      return false;
    },
  }
}
