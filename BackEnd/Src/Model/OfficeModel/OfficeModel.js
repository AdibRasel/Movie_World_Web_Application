const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    OfficeEmail:{type:String, unique:true},
    OfficeName:{type:String},
    FirstName:{type:String},
    LastName:{type:String},
    Address:{type:String},
    Mobile:{type:String},
    Password:{type:String},
    Photo:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const OfficeModel = mongoose.model("Office_List", DataSchema);
module.exports= OfficeModel