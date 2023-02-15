'use strict';

const task3 = {
  input: '',
  variant: 0,

  [Symbol.iterator](variant = this.variant) {

    if (typeof this.input !== 'string') this.input += '';
    if (typeof variant !== 'number') variant = +this.variant;
    const input = this.input;
    let index = 0;

    if (variant === 1) {
      return {
        next() {
          if (index * 2 < input.length) {
            return { done: false, value: input[2 * index++]};
          }
          return { done: true};
        }
      }
    } else if(variant === 2) {
      const wordEnds = ['.', ',', ' ', ';', ':', '"', '?', '!', '[', ']', '{', '}', '(', ')', '&', '—'];
      const iterated = [];
      let word = '';

      for (let i = 0; i < input.length; i++) {

        if (wordEnds.includes(input[i]) ) {

          while (wordEnds.includes(input[i + 1])) {
            i++;
          }

          iterated.push(word);
          word = '';
          i++;
        }

        word += input[i];
      }

      if (wordEnds.includes(input[input.length - 1]) === false) {
        iterated.push(word);
      }

      return {
        next() {
          if (index < iterated.length) {
            return { done: false, value: iterated[index++]};
          }
          return { done: true};
        }
      }
    } else if (variant === 3) {
      const sentenceEnds = ['.', '?', '!'];
      const iterated = [];
      let sentence = '';

      for (let i = 0; i < input.length; i++) {

        if (sentenceEnds.includes(input[i]) ) {
          
          while (
            sentenceEnds.includes(input[i + 1]) || 
            input[i + 1] === ' '
          ) {
            i++;
          }

          iterated.push(sentence);
          sentence = '';
          i++;
        }

        sentence += input[i];
      }

      if (sentenceEnds.includes(input[input.length - 1]) === false) {
        iterated.push(sentence);
      }

      return {
        next() {
          if (index < iterated.length) {
            return { done: false, value: iterated[index++]};
          }
          return { done: true};
        }
      }
    } else if (variant === 4) {
      const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
      const iterated = [];

      for (let i = 0; i < input.length; i++) {

        if (vowels.includes(input[i]) ) {
          iterated.push(input[i]);
        }

      }
      
      return {
        next() {
          if (index < iterated.length) {
            return { done: false, value: iterated[index++]};
          }
          return { done: true};
        }
      }

    } else { 
      return {
        next() {
          if (index < input.length) {
            return { done: false, value: input[index++]};
          }
          return { done: true};
        }
      }
    }
  }
}

module.exports = task3;