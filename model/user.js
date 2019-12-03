const mongoose = require("mongoose");

//create schema

const userSchema = new mongoose.Schema(
    {
         name:{
             type: String,
             required:true,
             min: 6,
             max: 256
         },
         email:{
             type: String,
             required:true,
             min: 6,
             max: 256      
         },
         password:{
             type: String,
             required:true,
             min: 8,
             max: 1024
         },
         date:{
             type: Date,
             Default: Date.now
         }

    }
);



module.exports = mongoose.model('user' , userSchema);