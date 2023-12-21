const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    UserEmail:{type:String, unique:true},
    FullName:{type:String},
    Mobile:{type:String},
    Password:{type:String},
    Photo:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const OfficeModel = mongoose.model("User_List", DataSchema);
module.exports= OfficeModel