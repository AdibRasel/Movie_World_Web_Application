const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    SuperAdminEmail:{type:String, unique:true},
    SuperAdminName:{type:String},
    Mobile:{type:String},
    Photo:{type:String},
    Password:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const SuperAdmin = mongoose.model("Super_Admin_List", DataSchema);
module.exports= SuperAdmin