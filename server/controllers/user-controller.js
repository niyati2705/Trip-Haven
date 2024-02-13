import User from "../models/UserModel.js";

//create


//update
export const updateUser = async (req,res,next)=>{
    try { const updatedUser = await User.findByIdAndUpdate(req.params.id, 
        {$set: req.body},  //find and update hotel, mdb set method
        {new : true}); 
       //findByIdAndUpdate returns the previous document and not the updated one; hence; new:true; after updating return new version of document
     res.status(200).json(updatedUser)
    }catch(err){
        next(err);
    } 
}

//delete
export const deleteUser = async (req,res,next)=>{
    try{
        //wont return anyth since only deleting
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted!");
    }catch(err){
        next(err);
    } 
}

//get
export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id );
        res.status(200).json(user)
    }catch(err){
        next(err);
    } 
}


//get all
export const getAllUsers = async (req,res,next)=>{
    try{
        const user = await User.find();
        res.status(200).json(user)
    }catch(err){
        //res.status(500).json(err); instead;
        next(err)
    } 
}

