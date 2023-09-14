const mongoose=require("mongoose");
require("dotenv").config()

const connection =mongoose.connect(process.env.mongoURL);

const userSchema=mongoose.Schema({
   name:String,
   age:Number,
   palce:String,
})

const UserModal=mongoose.model("user",userSchema)

module.exports={connection,UserModal}