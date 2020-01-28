const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//import routers
const authRouters = require("./Auth/router");
dotenv.config();
//connect to mongodb
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("MongoDB Conected")
    } catch (err) {
        console.error(err.message);
    }
};
connectDB();
//Middleware
app.use(express.json());    
//use middleware
app.use("/user/signin" , authRouters);

app.listen(3000 , () => {
    console.log("server is Running");
});