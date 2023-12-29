const mongoose = require('mongoose');

const userSignupSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },

})

const usermodel = mongoose.model('User', userSignupSchema);
module.exports = usermodel