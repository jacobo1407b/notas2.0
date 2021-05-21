import {removeTokenCookie} from '../../config/auth-cookie'
import connectDB from '../../middleware/mongo'  

 async function logout(req, res) {
  removeTokenCookie(res)
  res.writeHead(302, { Location: '/' })
  res.end()
}

export default connectDB(logout);