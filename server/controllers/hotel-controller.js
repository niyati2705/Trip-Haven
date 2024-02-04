import Hotel from "../models/HotelModel.js";

//create
export const createHotel = async (req,res,next)=>{
    //take hotel info from user
    const newHotel = new Hotel(req.body)
    
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }catch(err){
        next(err);
    } 
}

//update
export const updateHotel = async (req,res,next)=>{
    try { const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
        {$set: req.body},  //find and update hotel, mdb set method
        {new : true}); 
       //findByIdAndUpdate returns the previous document and not the updated one; hence; new:true; after updating return new version of document
     res.status(200).json(updatedHotel)
    }catch(err){
        next(err);
    } 
}

//delete
export const deleteHotel = async (req,res,next)=>{
    try{
        //wont return anyth since only deleting
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted!");
    }catch(err){
        next(err);
    } 
}

//get
export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id );
        res.status(200).json(hotel)
    }catch(err){
        next(err);
    } 
}


//get all
export const getAllHotel = async (req,res,next)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    }catch(err){
        //res.status(500).json(err); instead;
        next(err)
    } 
}

