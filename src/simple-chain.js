const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(typeof value === 'undefined' ? '' : (value + ''));
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.arr.length - 1) {
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.arr.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.reduce((acc, item, index) => {
      acc = acc + `( ${item} )` + (index === this.arr.length - 1 ? '' : '~~');
      return acc;
    }, '')
    this.arr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
