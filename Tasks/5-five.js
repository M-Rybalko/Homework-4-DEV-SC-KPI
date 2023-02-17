'use strict';

const task5 = {

  students: new Map(),
  passwords: {},

  makeAccount(student) {
    const {name, surname, grade, institute, security: {password, email}, ...subjects} = student;

    if (typeof name !== 'string') throw new Error() ;
    if (typeof surname !== 'string') throw new Error() ;
    if (typeof institute !== 'string') throw new Error() ;
    if (typeof grade !== 'number') throw new Error() ;

    for (const subject of Object.values(subjects)) {
      if ( isNaN(subject) || !isFinite(subject) || typeof subject !== 'number') throw new Error()
    }
    
    const account = {
      username: this.makeUsername(name, surname),
      email: email,
      averageMark: this.makeAverageMark(subjects),
      subjects: subjects,
    }

    this.passwords[account.username] = password;
    this.students.set(account.username, account);
    return account;
  },

  makeUsername (name, surname) {
    return name.concat(surname);
  },

  makeAverageMark (subjects) {
    let average = 0;
    const marks = Object.values(subjects);

    for (const subject of marks ) {
      average += subject;
    }

    return average / marks.length;
  },

  getMark (username, password) {

    if (password !== this.passwords[username]) {
      throw new Error('Wrong password and/or username');
    }

    const student = this.students.get(username);
    return student.averageMark;
  }

}

module.exports = task5;