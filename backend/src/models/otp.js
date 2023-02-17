const mongoose=require('mongoose');

const otpSchema=new mongoose.Schema({
    phone:String,
    code:String,
    expireIn:Number
},{timestamps:true})

module.exports=mongoose.model('otp',otpSchema,'otp')