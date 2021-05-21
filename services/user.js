import User from '../models/User';

class UserModel {
    async newUser(data){
        const comprobar = await User.findOne({email:data.email});
        if(comprobar){
            return {
                error:true,
                msg:"Ya existe este usuario"
            }
        }else{
            const {name,email,password,salt} = data;
            const addUser = new User({
                email,
                name,
                password,
                salt
            });
            await addUser.save();
            return{
                error:false,
                msg:"Estas registrado"
            }
        }
    }
    async getId(id){
        const user = await User.find({_id:id});
        return{
            user,
            error:false
        };
    }

    async login(email){
        return await User.findOne({email:email})
    }

    async validar(email,password){
        const user = await User.findOne({ email: email });
        return  await user.matchPassword(password);
    }
}

export default UserModel;