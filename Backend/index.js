const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const bcrypt=require('bcryptjs');
const app=express();
const account=require('./SCHEMA/userschema');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
}));
const connectionstring="mongodb+srv://Hariharan:pmrpHiB692L3XUFU@cluster0.kxkqd.mongodb.net/Blog?retryWrites=true&w=majority"; 
mongoose.connect(connectionstring,{useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>{
  console.log("Connected Successfully To mongodb")
})
.catch(e=>{
  console.log(e);
})

const port=process.env.PORT | 10000;
console.log(port);
app.get('/Home',(req,res)=>{
    res.end("Home Page Loaded");
})


app.post('/Signup', (req,res)=>{
  var user=req.body;
  const {Username,Password,Email,DOB}=user;
  try{
    var salt = bcrypt.genSaltSync(14);
    var hashedPassword = bcrypt.hashSync(Password, salt);
     account.findOne({Email},(err,user)=>{
      if(user)
      {
         res.send(JSON.stringify({"error":"User Already Exists","success":""}));
      }
      else{
        const newuser=new account({
          Username,
          Password:hashedPassword,
          Email,
          DOB
        }) 
        newuser.save(err=>{
          if(err){
           console.log(err);
   
           console.log("User Added Successfully");
            res.send(JSON.stringify({"error":"","success":"User Added Successfully","user":user}));
          }
        });
      }
      
    })
  
    
    }
  
  catch(e)
  {
    console.log(e)
    res.send(JSON.stringify({"error":"User Is not Added Successfully","success":""}));
  }

})



app.post('/Signin', (req,res)=>{
  var {Username,Password}=req.body;
  var user=req.body;
  console.log(user);
  if(user.Username=="" || user.Password=="")
  {
   return   res.send(JSON.stringify({"error":"Please Add All the Fields","success":""}));
  }
  else{
   
   account.findOne({Email:Username},(err,user)=>{
    if(user)
    {
        bcrypt.compare(Password,user.Password,(err,response)=>{
          if(response==true)
          {
            return res.send(JSON.stringify({"error":"","success":"Logged In","user":user}));
          }
          else{
            return res.send(JSON.stringify({"error":"Invalid Username Or Password","success":""}))
          }
        })
       
    }
  })
  }
  
})


app.get('/CreateBlog',(req,res)=>{
    res.end("CreateBlog Page Loaded");
})



app.get('/getBlog',(req,res)=>{
  res.send("Get Ur Blogs");
})


app.get('/',(req,res)=>{
  res.send("Hello World")
  console.log("My server")
  console.log("Server Strated at Port:",{port})
}).listen({port});