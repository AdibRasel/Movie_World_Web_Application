const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    MenuName:{type:String},
    MenuPath:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const MenuModel = mongoose.model("Menu_List", DataSchema);
module.exports= MenuModel