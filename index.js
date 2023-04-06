
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {connection} = require("./db")
const app = express();
const {userRouter} = require("./Router/user.Router");
const {apiRouter} = require("./Router/apin.Router")
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome To The Home Page")
})

app.use("/",userRouter)
app.use("/appointments",apiRouter)


app.listen(process.env.PORT,async()=>{
    try{
        console.log(`Server is running ${process.env.PORT}`);
        await connection;
        console.log("DB is Connected");
    }
    catch(e){
        console.log("Error Message",e.message)
    }
})