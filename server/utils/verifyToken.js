import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//for authenttication check
export const verifyToken = (req,res,next)=>{

    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"));
    }

    //verify the token, if exists doesnt mean correct
    jwt.verify(token,process.env.JWT_SECRET_KEY, (err,user)=>{
        if(err)  return next(createError(401, "Token is not valid"));
        //set new req property, can assign any new peoperty here, going to be our information
        req.user = user;
        next();
    })
}

//
export const verifyUser = (req,res,next)=>{
    //to verify user, it should be authenticated first
    verifyToken(req,res,next,()=>{
        //no next otherwise it will go to user's root again
         if(req.user.id === req.params.id || req.user.isAdmin){
            ///checkuser/:id === user id inside jwt token
            next(); //if everything correct itll go to users
         }
         else{
             return next(createError(401, "You are not authorized"));
         }
    })
}

export const verifyAdmin = (req,res,next)=>{
    //to verify admin, it should be authenticated first
    verifyToken(req,res,next,()=>{

         if(req.user.isAdmin){
            next();
         }
         else{
             return next(createError(401, "You are not authorized"));
         }
    })
}