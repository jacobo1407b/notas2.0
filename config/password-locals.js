import Local from 'passport-local'
import { findUser, validatePassword } from './user'

export const localStrategy = new Local.Strategy({
  usernameField: "email",
  session: false
},function (
  email,
  password,
  done
) {
  findUser({ email })
    .then(async (user) => {
      const pass = await validatePassword(user, password)
      if (user && pass) {
        done(null, user)
      } else {
        done(new Error('Invalid username and password combination'))
      }
    })
    .catch((error) => {
      done(error)
    })
})