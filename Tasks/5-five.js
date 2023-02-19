'use strict';

const task5 = {

  students: new Map(),
  passwords: {},

  makeAccount(student) {
    if (Object.keys(student.security).length !== 2) throw new Error() ;

    const {name, surname, grade, institute, security: {password, email}, ...subjects} = student;

    if (typeof name !== 'string') throw new Error() ;
    if (typeof surname !== 'string') throw new Error() ;
    if (typeof institute !== 'string') throw new Error() ;
    if (typeof grade !== 'number') throw new Error() ;
    
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
    name = name.trim();
    surname = surname.trim();
    return name.concat(' ', surname);
  },

  makeAverageMark (subjects) {
    let average = 0;
    const marks = Object.values(subjects);

    if (marks.length === 0) return 0;

    for (const subject of marks) {
      if (isNaN( parseInt( (subject))) || typeof subject !== 'number') throw new Error()
    }

    for (const subject of marks ) {
      average += parseInt(subject);
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