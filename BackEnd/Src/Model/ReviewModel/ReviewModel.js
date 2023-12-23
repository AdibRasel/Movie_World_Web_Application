const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    Review:{type:String},
    ReviewLength:{type:Number},
    MovieName:{type:String},
    MovieID:{type:mongoose.Schema.Types.ObjectId},
    UserName:{type:String},
    UserID:{type:mongoose.Schema.Types.ObjectId},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const ReviewModel = mongoose.model("Review_List", DataSchema);
module.exports= ReviewModel