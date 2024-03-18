const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
      type:Number,
      required:true
    },
    image:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    is_admin:{
        type:Number,
        required:true
    },
    is_verify:{
        type:Number,
        default:0
    }

});

const User= new mongoose.model("User",userSchema);

module.exports=User;