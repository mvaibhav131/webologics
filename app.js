import express from "express";
import mongoose from "mongoose";
import personrouter from "./routes/person-route";
import filerouter from "./routes/file-route";


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>res.send('Hello Welcome to Webologics Assignment'));
app.use("/api",personrouter);
app.use("/file",filerouter);


mongoose.connect("mongodb://localhost:27017/data")
.then(()=> app.listen(8080))
.then(()=>console.log("Server is connected to port 8080"))
.catch((err)=>console.log(err));