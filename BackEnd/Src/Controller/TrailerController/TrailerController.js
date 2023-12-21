const CreateService = require("../../Service/Common/CreateService");
const TrailerModel = require("../../Model/TrailerModel/TrailerModel")


// Trailer Create
exports.TrailerCreate = async (req, res) => {
    let Result = await CreateService(req, TrailerModel);
    res.status(200).json(Result);
};