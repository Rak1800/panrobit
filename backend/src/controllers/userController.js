const userModel = require("../models/userModel")
const Otp=require('../models/otp')

let isValid= function(value){
    if(typeof value === "undefined" || value === "null") return true;
    if(typeof value === "string" && value.trim().length===0) {return true;}  //first condition checked than worng to move to next condtion checked
    return false;
};
let validPhone = /^[6-9]\d{9}$/;
let validEmail = /^[a-z0-9 ]{1,}@g(oogle)?mail\.com*$/;

const userController= async function(req,res){
    const data=req.body
    const {fName,lName,gender,email,phone}=data

    if(Object.keys(data).length==0) return res.status(400).send({ status: false, message: "Please provide the Details" });
    if(!fName) return res.status(400).send({ status: false, message: "Enter your first Name" });
    if(isValid(fName)) return res.status(400).send({ status: false, message: "Enter your valid first Name" });
    if(!lName) return res.status(400).send({ status: false, message: "Enter your Last Name" });
    if(isValid(lName)) return res.status(400).send({ status: false, message: "Enter your valid Last Name" });
    if(!gender) return res.status(400).send({ status: false, message: "Enter your valid gender like Male,Female,Other" });
    if(!email) return res.status(400).send({ status: false, message: "Enetr your Email" });
    if(!validEmail.test(email)) return res.status(400).send({ status: false, message: `Enter your valid Email ${email}` });
    let checkmail=await userModel.findOne({email:email})
    if(checkmail) return res.status(400).send({status:false,message:`already exists ${email}`})
    if(!phone) return res.status(400).send({ status: false, message: "Enter your Phone" });
    if(!validPhone.test(phone)) return res.status(400).send({ status: false, message: `Enter your valid phone ${phone}` });
    let checkphone= await userModel.findOne({phone:phone})
    if(checkphone) return res.status(400).send({status:false, message:`already exists ${phone}`})
    const saveData=await userModel.create(data)
    res.send({status:false,message:"Account created",data:saveData}) 
}

const otpSend=async (req,res)=>{
    let data=req.body
    const {phone}=data
    checkphone= await userModel.findOne({phone:phone})
    const responseType={}
    if(checkphone){
        let otpcode=Math.floor((Math.random()*10000)+1)
        let otpdata=new otp({
            phone:data.phone,
            code:otpcode,
            expireIn:new Date().getTime()*300*1000
        })
        let otpresponse=await Otp.create(otpdata)
        responseType.statusText="success"
        responseType.message="please check your phone"
    }else{
        responseType.statusText="error"
        responseType.message="email Id not exist"
    }
  res.status(201).send(responseType)
}
const enterOtp=async (req,res)=>{
  
    let data=req.body
    let {code}=data
    let otp=await Otp.findOne({code:code})
    console.log(otp)

    let response={}
    if(otp){
        let currtime=new Date().getTime()
        let diff=data.expireIn-currtime
        if(diff<0){
            response.message="Token expire",
            response.statusText='error'
        }else{
            response.statusText='login success'
        }
    }else{
        response.message="Invalid otp",
        response.statusText='error'
    }
    res.status(201).send(response)
}


module.exports={userController,otpSend,enterOtp}