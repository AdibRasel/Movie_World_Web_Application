const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    MovieName:{type:String},
    MovieDescription:{type:String},
    MovieThumbnail:{type:String},
    FullEmbedCode:{type:String},
    EmbedCode:{type:String},
    MovieReviewsID:{type:mongoose.Schema.Types.ObjectId},
    OfficeID:{type:mongoose.Schema.Types.ObjectId},
    CreateDate:{type:Date, default:Date.now()},
},{versionKey: false});
const HollywoodMoviesModel = mongoose.model("Hollywood_Movies_List", DataSchema);
module.exports= HollywoodMoviesModel