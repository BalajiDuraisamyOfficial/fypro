const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//import routers
const authRouters = require("./Auth/router");
dotenv.config();
//connect to mongodb
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },() => {
        console.log("connected to DB");
    });

//Middleware
app.use(express.json());    
//use middleware
app.use("/app/signup" , authRouters);

app.listen(3000 , () => {
    console.log("server is Running");
});