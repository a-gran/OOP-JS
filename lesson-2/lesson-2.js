let a = {
  text: 'Hello',
  color: 'red',
  bold: true,
  show() {
    console.log(this.color)
  },
}

let b = {
  fontSize: '24px',
  __proto__: a,
}

// b.show()
// b.color = 'green'
// b.show()

let c = {
  fontFamily: 'Verdana',
  __proto__: b,
}

// console.log(c)
// console.log(c.bold)
// console.log(b.hasOwnProperty('fontFamily'))
// console.log(c.hasOwnProperty('fontFamily'))

// if (c.hasOwnProperty('fontFamily')) console.log('Yes!')

// a => b => c

let user = {
  login: '',
  password: '',
  validatePassword: function () {
    return this.password.length > 6 ? true : false
  },
}

// user_profile.js
let user_profile = {
  username: '',
  photo: '',
  age: 0,
  getUserData() {
    // this.login
  },
  __proto__: user,
}

user.password = 'hello123'
console.log(user.validatePassword())
user_profile.age = 25
user_profile.username = 'Pupkin'
console.table(user_profile)
