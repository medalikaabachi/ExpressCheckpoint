const express=require("express")
const date=require("./middleware/date")


const app=express()

app.use(express.static(__dirname+"/public"))
 app.get("/css/styles.css",(req,res)=>{
     res.sendFile(__dirname+"/public/css/styles.css" )
 })

app.get("/home",date,(req,res)=>{
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/contact",date,(req,res)=>{
    res.sendFile(__dirname + "/public/contactUs.html")
})

app.get("/service",date,(req,res)=>{
    res.sendFile(__dirname + "/public/ourServices.html")
})

app.get("*",date,(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(5000,(err)=>{
    err?console.log(err):console.log("server is running on port 5000")
})