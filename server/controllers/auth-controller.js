import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            //username: req.body.username,
            //email: req.body.email,
            ...req.body, //will take all properties of user model
            password: hash,
            // password: req.body.password,
        })
        await newUser.save()
        res.status(201).send("User has been created")
    }catch(err){
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try{
          
        const user = await User.findOne({username:req.body.username})
        if(!user)
        return next(createError(404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, 
        user.password);

        if (!isPasswordCorrect)  
          return next(createError(400, 'Invalid Password or username'));
        //if password correct

        // const token = jwt.sign({id:user._id, isAdmin:user.isAdmin} , process.env.JWT_SECRET_KEY);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
        //

        //to not send passwprd
        const {password, isAdmin, ...otherDetails} = user._doc;
    
        res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(201)
        .json( { details:{...otherDetails}, isAdmin});
    }catch(err){
        next(err)
    }
}