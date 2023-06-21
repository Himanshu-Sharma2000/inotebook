const express = require('express');
const router = express.Router();
const User =require('../models/User');
const { body, validationResult } = require('express-validator');




// Create a user using: POST "/api/auth/createuser".    no login required
router.post('/createuser', [
    body('name',"Enter a Valid Name").isLength({min:5}),
    body('email',"Enter a Valid Email").isEmail(),
    body('password',"Password must be atleast 7 characters").isLength({min:7}),
    ],async(req , res)=>{
//    if there are errors , return bad request and the errors

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
   
    // check Whether the user is already exits or not 
   try {
    
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this Email already exits Plz try with a new email"});
    }
    // creating a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    res.json(user)
    
     } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured");
    }
})


module.exports = router