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
  res
        .status(200)
        .json({ message: req.body });
    } catch (err) {
        res.status(500).json("Internal Server Error");
        console.log(err);
    }
}

module.exports = {home, register};