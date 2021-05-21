import jwt from 'jsonwebtoken'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookie'


export async function setLoginSession(res, session) {
  setTokenCookie(res, session)
}

export async function getLoginSession(req) {
  const { JWT_ALGORITHM, JWT_SECRET } = process.env;
  const token = getTokenCookie(req)
  
  if (!token){
    return null
  }else{
    const verifi = jwt.verify(token,JWT_SECRET,{
      algorithm: JWT_ALGORITHM,
    })
    if(!verifi){
      return null
    }
    return verifi ? verifi : null
  }
}