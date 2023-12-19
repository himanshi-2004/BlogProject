const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
        Required:true,

    },
    email:{
        type:String,
        Required:true,
    },
    password:{
        type:String,
        Required:true,
    },
    confirmpassword:{
        type:String,
        Required:true,
    }
},{timestamps:true})
const AdminModel = mongoose.model('admin',AdminSchema)
module.exports = AdminModel