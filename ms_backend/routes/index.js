const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userModel = require('../models/model');
const bcrypt = require ('bcrypt');

require('dotenv').config()

router.post("/login", async (req, res) =>{
    const {username, password} = req.body;
    const userInList = await userModel.findOne({username});
    if(!userInList){
        return  res.json({status: 'error' , error : 'invalid username'});
    }
    console.log(userInList)
    if(await bcrypt.compare(password, userInList.password)){
        const accessToken = generateToken(userInList);
        const refreshToken  = jwt.sign({user : userInList}, process.env.REFRESH_TOKEN_SECRET);
        return res.json({ accessToken : accessToken, refreshToken : refreshToken});
    }
    res.json({status: 'error' , error : 'invalid username/password'});
});

router.post("/register", async (req, res) =>{
    const regPpassword = await bcrypt.hash(req.body.regPpassword,10);
    try{
        await userModel.create({
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            phone : req.body.phone,
            username : req.body.username,
            password : regPpassword
        });
        res.sendStatus(200);
    } catch(err){
        console.log(err);
        res.json({status: 'error'});
    }
});

router.post("/dashboard", verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err,data) => {
        if(err){
            res.sendStatus(403);
        } else {
            res.json({
                data
            });
        }
    })
});


function verifyToken(req, res, next){
    const headerValue  = req.headers.authorization;
    if(typeof headerValue !== undefined){
        const accTokenArray = headerValue.split(" ");
        const accToken = accTokenArray[1];
        req.token = accToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

function generateToken(user){
    return jwt.sign({ user : user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : "30m"});
}

module.exports = router;