const userModel = require("../models/user");

const signup = async(req,res)=>{

    //check existing user

    //Hashed password

    //User Creation

    //token Generate

    const {username, email, password} = req.body;
    try 
    {
        const existingUser = await userModel.findOne({email : email})
        if(existingUser)
        {
            return res.status(400).json({message : "User already Exist!!"});
        }
    } 
    catch (error) 
    {
        
    }
}

const signin = (req, res) =>{

}

module.exports = {signup,signin};