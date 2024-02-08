import express from "express";
import { 
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getAllRooms,
    updateRoomAvailability,
 } from "../controllers/room-controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelId",verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin,deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getAllRooms);

export default router;