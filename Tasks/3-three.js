'use strict';

const task3 = {
  string: '',
  variant: 0,

  [Symbol.iterator](variant = this.variant) {

    if (typeof this.string !== 'string') this.string += '';
    if (typeof variant !== 'number') variant = +this.variant;
    const string = this.string;
    let index = 0;

    if (variant === 1) {
      return {
        next() {
          if (index * 2 < string.length) {
            return { done: false, value: string[2 * index++]};
          }
          return { done: true};
        }
      }
    } else if(variant === 2) {
      const wordEnds = ['.', ',', ' ', ';', ':', '"', '?', '!', '[', ']', '{', '}', '(', ')', '&', '—'];
      const iterated = [];
      let word = '';

      for (let i = 0; i < string.length; i++) {

        if (wordEnds.includes(string[i]) ) {

          while (wordEnds.includes(string[i + 1])) {
            i++;
          }

          iterated.push(word);
          word = '';
          i++;
        }

        word += string[i];
      }

      if (wordEnds.includes(string[string.length - 1]) === false) {
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

      for (let i = 0; i < string.length; i++) {

        if (sentenceEnds.includes(string[i]) ) {
          
          while (
            sentenceEnds.includes(string[i + 1]) || 
            string[i + 1] === ' '
          ) {
            i++;
          }

          iterated.push(sentence);
          sentence = '';
          i++;
        }

        sentence += string[i];
      }

      if (sentenceEnds.includes(string[string.length - 1]) === false) {
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

      for (let i = 0; i < string.length; i++) {

        if (vowels.includes(string[i]) ) {
          iterated.push(string[i]);
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
          if (index < string.length) {
            return { done: false, value: string[index++]};
          }
          return { done: true};
        }
      }
    }
  }
}
