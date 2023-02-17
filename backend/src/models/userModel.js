const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fName:{
        type:String,
        require:true
    },
    lName:{
        type:String,
        require:true
    },
    gender:{
       type:String,
       require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    }

},{timestamps:true})

module.exports=mongoose.model("users",userSchema)