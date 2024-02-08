import Room from "../models/RoomModel.js"
import Hotel from "../models/HotelModel.js"
import {createError} from "../utils/error.js";

//create room and update hotelController w hotelid
export const createRoom = async(req,res,next)=>{

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save() //save room
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push:{rooms:savedRoom._id}}) //update hotel, and add saved room id inside HotelController's rooms 
            //mongodb push method to push any item in any array
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}

//update room
export const updateRoom = async (req,res,next)=>{
    try { const updatedRoom = await Room.findByIdAndUpdate(req.params.id, 
        {$set: req.body},  //find and update room, mdb set method
        {new : true}); 
       //findByIdAndUpdate returns the previous document and not the updated one; hence; new:true; after updating return new version of document
     res.status(200).json(updatedRoom)
    }catch(err){
        next(err);
    } 
}

//update room availability
export const updateRoomAvailability = async (req,res,next)=>{
    try { 
        //no findByid bec not updating room; updating room number.
        //id ;that we pass in router url 
         await Room.updateOne(
         {"roomNumbers._id" : req.params.id},
         {
            $push:{
                //to update nested properties
                "roomNumbers.$.unavailableDates":req.body.dates
            },
         }
        )
     res.status(200).json("Room status updated");
    }catch(err){
        next(err);
    } 
};

//delete room

export const deleteRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelId;
    try{
        //wont return anyth since only deleting
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId, 
            {$pull: {rooms: req.params.id},
            }) ;
        }catch(err){
            next(err);
        }
        res.status(200).json("Room has been deleted!");
    }catch(err){
        next(err);
    } 
}

//get room
export const getRoom = async (req,res,next)=>{
    try{
        const room = await Room.findById(req.params.id );
        res.status(200).json(room);
    }catch(err){
        next(err);
    } 
}


//get all rooms
export const getAllRooms = async (req,res,next)=>{
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms)
    }catch(err){
        //res.status(500).json(err); instead;
        next(err)
    } 
}

