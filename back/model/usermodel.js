const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','user']
        
    },
    phone:String,
    
})
module.exports=mongoose.model('ecommerce',userSchema)