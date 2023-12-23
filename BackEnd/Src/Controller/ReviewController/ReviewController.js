const ReviewModel = require("../../Model/ReviewModel/ReviewModel");
const CreateService = require("../../Service/Common/CreateService");
const ReviewService = require("../../Service/ReviewService/ReviewService");




// Review Create
exports.ReviewCreate = async (req, res) => {
    let Result = await CreateService(req, ReviewModel);
    res.status(200).json(Result);
};


exports.ReviewFullSee = async (req, res) => {
    let Result = await ReviewService(req);
    res.status(200).json(Result);
};