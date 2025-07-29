const User = require('../models/user-model');

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

   
    const userCreated = await User.create({
      username,
      email,
      password,
      phone
    });

  res.status(200).json({ message: "User registered successfully", user: userCreated });
    } catch (err) {
        res.status(500).json("Internal Server Error");
        console.log(err);
    }
}

module.exports = {home, register};