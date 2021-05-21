import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const NotasSchema = new Schema({
    name:{type:String},
    desc:{type:String},
    date:{type:Date,default:Date.now()},
    user:{type:String}
});

mongoose.models = {};

var Notas = mongoose.model('Notas', NotasSchema);

export default Notas;
