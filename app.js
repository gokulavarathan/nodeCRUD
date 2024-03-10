const bodyParser = require('body-parser')
const express = require('express')
const route = require("./router")
const app = express();
const db = require("./db")

app.use(bodyParser.json())


app.get("/healthCheck",(req,res)=>{
    res.json({status:true,message:"working fine"})
})

app.use("/",route)
let server ;
if(true){
    const http = require("http")
    http.createServer(app)
}else{
    const https= require("https")
    https.createServer(app)
}
app.listen(3000,()=>{console.log("server connected")})