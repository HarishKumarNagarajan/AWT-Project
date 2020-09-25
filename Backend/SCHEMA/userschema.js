const mongoose=require('mongoose');
const schema=mongoose.Schema;

const users=new schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    }
})

const account=mongoose.model("User",users);

module.exports=account;