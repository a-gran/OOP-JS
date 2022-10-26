// class => function
// abstract class => class => object

class User {
  // username
  // password
  constructor(username, password) {
    this.username = username
    this.password = password
  }
  validatePassword() {
    // true if pass > 6
    console.log('work parent pass')
    return this.password.length > 6 ? true : false
  }
}

let a = 'Ivan'
let b = '0123456' // исходный пароль

const person = new User(a, b)
// console.log(person)
// console.log(person.username)
// console.log(person.validatePassword())

/*
 * description
 */

class Student extends User {
  constructor(username, password, nickname) {
    super(username, password)
    this.nickname = nickname
  }
  getStudentCourses() {
    return [1, 2]
  }
  validatePassword() {
    // true if pass > 10
    // super.validatePassword() ??? не работает ???
    return this.password.length > 10 ? true : false
  }
}

let c = 'Aristarh'
b = '01234567890' // пароль перезаписан

let firstStudent = new Student(a, b, c)
console.table(firstStudent)
console.table(firstStudent.getStudentCourses())
console.log(firstStudent.validatePassword())
