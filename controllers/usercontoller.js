const User = require('../models/usermodel');
const bcrypt=require('bcrypt');

const securePassword=async(password)=>{
    try{
        const passwordhash=await bcrypt.hash(password,10);
        return passwordhash;
    }
    catch(error){
        console.log(error.message);
    }
}
const loadregister=async(req,res)=>{
  res.render('registration');
};

const insertuser = async(req,res)=>{
    try{
       const spassword= await securePassword(req.body.password);  
       const user=new User({
          name:req.body.name,
          email:req.body.email,
          mobile:req.body.mobile,
          image:req.file.filename,
          password:spassword,
          is_admin:0
       });
       const userdata=await user.save();

       if(userdata){
          res.render("registration",{message:"Registartion has been successfully,please verify your mail"});
       }else{
        res.render("registartion",{message:"Registartion has not been successfull"});
       }
    }
    catch(error){
      console.log(error.message);
    }
};

module.exports={
    loadregister,
    insertuser
}