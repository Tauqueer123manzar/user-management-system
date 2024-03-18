const express =require("express");
const bodyParser = require("body-parser");
const UserController= require('../controllers/usercontoller');
const userroute=express();
const multer=require("multer");
const path=require("path");

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userImage'));
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname;
        cb(null,name);
    }
});

const upload =multer({storage:storage});

userroute.set('view engine','ejs');
userroute.set('views','./views/users');

userroute.use(bodyParser.json());
userroute.use(bodyParser.urlencoded({extended:true}));

userroute.get('/register',UserController.loadregister);
userroute.post('/register',upload.single('image'),UserController.insertuser);

// userroute.post('/register',UserController.insertuser);

module.exports=userroute;


