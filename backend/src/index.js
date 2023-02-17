const express=require("express")
const mongoose=require("mongoose")
 const route=require('./routes/route') 

const app=express()

app.use(express.json())
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/panrobit",{
 useNewUrlParser:true
}).then(()=>console.log("mongodb is connect"))
.catch((err)=>console.log(err))

app.use('/',route) 

app.listen(5000 ,()=>console.log("express is running on prot "+(5000)))