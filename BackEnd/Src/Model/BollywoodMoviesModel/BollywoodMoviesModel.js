const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    MovieName:{type:String},
    MovieDescription:{type:String},
    MovieThumbnail:{type:String},
    FullEmbedCode:{type:String},
    EmbedCode:{type:String},
    MovieReviewsID:{type:String},
    OfficeID:{type:String},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const BollywoodMoviesModel = mongoose.model("Bollywood_Movies_List", DataSchema);
module.exports= BollywoodMoviesModel