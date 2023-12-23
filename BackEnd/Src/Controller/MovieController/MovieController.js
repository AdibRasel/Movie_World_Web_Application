const BollywoodMoviesModel = require("../../Model/BollywoodMoviesModel/BollywoodMoviesModel");
const HollywoodMoviesModel = require("../../Model/HollywoodMoviesModel/HollywoodMoviesModel");
const AllDetailsService = require("../../Service/Common/AllDetailsService");
const CreateService = require("../../Service/Common/CreateService");
const MovieFullDetailsService = require("../../Service/MovieService/MovieFullDetailsService");


// Bollywood Movies Create
exports.BollywoodMoviesCreate = async (req, res) => {
    let Result = await CreateService(req, BollywoodMoviesModel);
    res.status(200).json(Result);
};

// Bollywood Movies All Details
exports.BollywoodMoviesDetails = async (req, res) => {
    let Result = await AllDetailsService(req, BollywoodMoviesModel)
    res.status(200).json(Result)
}


// Hollywood Movies Create
exports.HollywoodMoviesCreate = async (req, res) => {
    let Result = await CreateService(req, HollywoodMoviesModel);
    res.status(200).json(Result);
};

// Hollywood Movies All Details
exports.HollywoodMoviesDetails = async (req, res) => {
    let Result = await AllDetailsService(req, HollywoodMoviesModel)
    res.status(200).json(Result)
}


// Hollywood Movies All Details
exports.AllMovieMoviesDetails = async (req, res) => {
    let AllHollywoodMovie = await AllDetailsService(req, HollywoodMoviesModel);
    let AllBollywoodMovie = await AllDetailsService(req, BollywoodMoviesModel);

    let allMovieDetails = {
        hollywood: AllHollywoodMovie,
        bollywood: AllBollywoodMovie
    };

    res.status(200).json(allMovieDetails);
}



// Movie Full Details Service
exports.FullMovieMoviesDetails = async (req, res) => {
    let FullMoviesDetails = await MovieFullDetailsService(req, HollywoodMoviesModel, BollywoodMoviesModel);
    res.status(200).json(FullMoviesDetails);
}




