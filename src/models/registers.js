const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    squadname: {
        type:String,
        required:true
    },
    squadleader: {
        type:String,
        required:true
    },
    playerone: {
        type:String,
        required:true
    },
    oneid: {
        type:Number,
        required:true,
        unique:true
    },
    playertwo: {
        type:String,
        required:true
    },
    twoid: {
        type:Number,
        required:true,
        unique:true
    },
    playerthree: {
        type:String,
        required:true
    },
    threeid: {
        type:Number,
        required:true,
        unique:true
    },
    playerfour: {
        type:String,
        required:true
    },
    fourid: {
        type:Number,
        required:true,
        unique:true
    },
    playerfive: {
        type:String,
        required:true
    },
    fiveid: {
        type:Number,
        required:true,
        unique:true
    },
    playersix: {
        type:String,
        required:true
    },
    sixid: {
        type:Number,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone: {
        type:Number,
        required:true,
        unique:true
    }
})

const Register = new mongoose.model("Register", registerSchema);

module.exports = Register;