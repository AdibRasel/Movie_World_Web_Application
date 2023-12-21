const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    Title:{type:String},
    SubTitle:{type:String},
    Image:{type:String},
    ExtraLink:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const TrailerModel = mongoose.model("Trailer_List", DataSchema);
module.exports= TrailerModel