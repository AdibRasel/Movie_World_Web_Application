const BollywoodMoviesModel = require("../../Model/BollywoodMoviesModel/BollywoodMoviesModel");
const HollywoodMoviesModel = require("../../Model/HollywoodMoviesModel/HollywoodMoviesModel");
const CreateService = require("../../Service/Common/CreateService");


// Bollywood Movies Create
exports.BollywoodMoviesCreate = async (req, res) => {
    let Result = await CreateService(req, BollywoodMoviesModel);
    res.status(200).json(Result);
};


// Hollywood Movies Create
exports.HollywoodMoviesCreate = async (req, res) => {
    let Result = await CreateService(req, HollywoodMoviesModel);
    res.status(200).json(Result);
};