import jwt from "jsonwebtoken";
import passport from "passport";
import nextConnect from "next-connect";
import { localStrategy } from "../../config/password-locals";
import { setLoginSession } from "../../config/auth";
import "../../middleware/db";

passport.use(localStrategy);

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      passport.authenticate(
        "local",
        { session: false },
        async (error, user) => {
          if (error) {
            res.status(401).send(error.message);
          } else {
            const { JWT_ALGORITHM, JWT_SECRET } = process.env;
            const payload = {
              sub: user._id,
              exp: Math.floor(Date.now() / 1000) + 86400,
              username: user.name,
              email: user.email,
            };
            const token = jwt.sign(JSON.stringify(payload), JWT_SECRET, {
              algorithm: JWT_ALGORITHM,
            });

            await setLoginSession(res, token);
            res.status(200).send({ done: true });
          }
        }
      )(req, res);
    } catch (error) {
      console.error(error);
      res.status(401).send(error.message);
    }
  });
