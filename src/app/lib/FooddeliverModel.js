const { default: mongoose } = require("mongoose");


const restaurantModel= new mongoose.Schema({
    restauranName:String,
    email:String,
    password:String,
    ctiy:String,
    address:String,
    Mobile:String
})
export const restaurantSchema= mongoose.models.fooddeliveries
|| mongoose.model("fooddeliveries", restaurantModel);