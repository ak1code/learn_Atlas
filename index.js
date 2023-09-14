const express=require("express");
const app=express();
const {connection, UserModal}=require("./db");


app.get("/",(req,res)=>{
    res.send("welcome to the home page")
})

app.post("/add",async(req,res)=>{
     const payload=req.body;
     const user=new UserModal(payload);
     await user.save();
     res.send("user added")
})

app.get("/user",async(req,res)=>{

    try {
        const query=req.query;
        const user=await UserModal.find(query);
         res.send(user)
    } catch (error) {
         res.send(error)
    }
    
})

app.listen(1100,async()=>{
    try {
        await connection
        console.log("database is running")
        console.log("server is running 1100")
    } catch (error) {
        console.log(error)
    }
})