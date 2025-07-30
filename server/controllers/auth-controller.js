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

  res.status(201).json({ message: "User registered successfully", token: await userCreated.generateToken(),userId: userCreated._id.toString() });
    } catch (err) {
        res.status(500).json("Internal Server Error");
        console.log(err);
    }
}

//login controller

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const userExist = await User.findOne({ email });
    console.log(userExist);
  
    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const user = await bcrypt.compare(password, userExist.password); 

    if (user) {
      res.status(200).json({
        message: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString()});
    }else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }}

module.exports = {home, register,login};