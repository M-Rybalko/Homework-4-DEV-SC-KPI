'use strict';

const task4 = {
  object: {},

  set(key, value) {
    if (typeof key !== 'string') key = JSON.stringify(key);
    this.object[key] = value;
    return;
  },

  get(key) {
    if (typeof key !== 'string') key = JSON.stringify(key);
    if (this.object[key] ) {
      return this.object[key]
    }
    return undefined;
  },

  has(key) {
    if (typeof key !== 'string') key = JSON.stringify(key);
    return Object.keys(this.object).includes(key) ? true : false;
  },

  delete(key) {
    if (typeof key !== 'string') key = JSON.stringify(key);
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