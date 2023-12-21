const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    Logo:{type:String},
    Title:{type:String},
    Title_One:{type:String},
    Title_Two:{type:String},
    Title_Three:{type:String},
    Title_Four:{type:String},
    Title_Five:{type:String},
    Section_One:{type:String},
    Section_Two:{type:String},
    Section_Three:{type:String},
    Section_Four:{type:String},
    Section_Five:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const DashBoardModel = mongoose.model("DashBoard_Info", DataSchema);
module.exports= DashBoardModel