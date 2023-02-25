'use strict';

const task4 = {
  object: {},

  set(key, value) {
    this.object[key] = value;
    return;
  },

  get(key) {
    if (this.object[key] ) {
      return this.object[key]
    }
    return undefined;
  },

  has(key) {
    return Object.keys(this.object).includes(key.toString()) ? true : false;
  },

  delete(key) {
    if (this.object[key] ) {
      delete this.object[key];
      return true;
    }
    return false;
  },

  clear() {
    for(const key in this.object) {
      delete this.object[key];
    }
    return;
  },

  size() {
    return Object.keys(this.object).length;
  },

  keys() {
    return Object.keys(this.object);
  },

  values() {
    return Object.values(this.object);
  },

  entries() {
    return Object.entries(this.object);
  },

}

module.exports = task4;
