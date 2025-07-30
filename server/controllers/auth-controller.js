const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const home = async (req,res) => {
  try{
    res
        .status(200) 
        .send("Hello, Router!");

  } catch(err){
        console.log(err);
        
    }
}

const register = async (req, res) => {
  try {
    console.log(req.body);
    const {username, email, password , phone} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
      return res.status(400).json({message: "User already exists"});
    }


  // Hash the password
    // const saltRound = 10;
    // const hash_Password = await bcrypt.hash(password, saltRound);

   
    const userCreated = await User.create({
      username,
      email,
      password,
      phone
    });

  res.status(201).json({ message: "User registered successfully", user: userCreated, token: await userCreated.generateToken() });
    } catch (err) {
        res.status(500).json("Internal Server Error");
        console.log(err);
    }
}

module.exports = {home, register};