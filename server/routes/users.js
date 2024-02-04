import express from "express";
import { 
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
 } from "../controllers/user-controller.js";
const router = express.Router();
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// //check authentication
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user you are logged in");
// })

// //check user
// router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
//     res.send("hello user you are logged in and you can delete your account");
// })

//check admin
router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
    res.send("hello admin you are logged in and you can delete all accounts");
})


//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin, getAllUsers);

export default router;