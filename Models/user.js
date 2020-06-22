const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    email:{
        type : String,
        required: true,
        unique: true
    },
    password:{
        type : String,
        required: true
    },
    name:{
        type : String,
        required: true
    }
},{
    timestamps:true
});

const User= mongoose.model('User',UserSchema);

module.exports= User;