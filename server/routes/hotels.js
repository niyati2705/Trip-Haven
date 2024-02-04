import express from "express";
import { 
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel,
 } from "../controllers/hotel-controller.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin,deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getAllHotel);

export default router;