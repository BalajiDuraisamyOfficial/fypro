const routers = require("express").Router();
const User = require("../model/user");

routers.post("/registerer", async (req,res) => {
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
        console.log("it works");

    }catch(err){
       res.status(404).send(err);
       console.log("not work");
    }
});




module.exports = routers;