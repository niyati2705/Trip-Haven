import Hotel from "../models/HotelModel.js";
import Room from "../models/RoomModel.js";

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
    const {min,max,...others} = req.query;
    try{
        const hotels = await Hotel.find({
            ...others, 
            cheapestPrice :{$gte:min||500, $lte:max||10000}
        });
        res.status(200).json(hotels)
    }catch(err){
        //res.status(500).json(err); instead;
        next(err)
    } 
}

//get count by city
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
};

//get count by Property type
export const countByType = async (req, res, next) => {
    //multiple cities but ony limited 5 types here; can fetch one by one
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})

        res.status(200).json([
            {type:"hotel", count: hotelCount}, 
            {type:"apartments" , count: apartmentCount },
            {type:"resorts", count: resortCount}, 
            {type:"villas" , count: villaCount}, 
            {type:"cabins" , count: cabinCount}, 
        ])
    } catch (err) {
      next(err);
    }
};
//get hotel rooms
//in hotel model we have rooms that contain room ids; acc to id we can fetch rooms
export const getHotelRooms = async(req,res,next)=>{
    try{
        const hotel = await  Hotel.findById(req.params.id);
        //promise all bec multiple rooms
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
            //id;Room from RoomModel; 
        }))
        res.status(200).json(list);
    }catch(err){
        next(err);
    }
}

