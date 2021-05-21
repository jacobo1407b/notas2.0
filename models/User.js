import mongoose from "mongoose";
import bcrypt from "bcryptjs";
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  salt:{type: String, require: true},
  name: { type: String, require: true },
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

mongoose.models = {};

var User = mongoose.model("Users", UserSchema);

export default User;
