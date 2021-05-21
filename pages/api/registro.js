import {createUser} from '../../config/user';
import connectDB from '../../middleware/mongo'  

async function signup(req, res) {
  try {
    const result = await createUser(req.body)
    res.status(200).send(result)
  } catch (error) {
    console.error(error)
    res.status(500).end(error.message)
  }
}


export default connectDB(signup);