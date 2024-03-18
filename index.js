const mongoose =require("mongoose");
const express=require("express");
const port=8080;
const app=express();

main().then((res)=>{
    console.log("connection successfull!!");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/User-managemnet-system');
}

const userRoute=require('./routes/userroutes');
app.use('/',userRoute);

app.listen(port,()=>{
    console.log(`${port} port is running now..`);
});