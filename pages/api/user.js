import {getLoginSession} from '../../config/auth'
import {findUser} from '../../config/user'
import connectDB from '../../middleware/mongo'  

async function user(req, res) {
    try {
      const session = await getLoginSession(req)
      const userTemp = (session && (await findUser(session))) ?? null

      let user ={
        id:userTemp?._id,
        email:userTemp?.email,
        name:userTemp?.name
      }
      res.status(200).json(userTemp? user : null)
    } catch (error) {
      console.error(error)
      res.status(500).end('Authentication token is invalid, please log in')
    }
  }

  export default connectDB(user)