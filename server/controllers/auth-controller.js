const home = async (req,res) => {
  try{
    res
        .status(200) 
        .send("Hello, Router!");
        
  } catch(err){
        console.log(err);
        
    }
}

module.exports = {home};