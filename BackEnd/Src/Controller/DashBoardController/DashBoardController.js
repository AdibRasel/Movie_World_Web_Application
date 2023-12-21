const CreateService = require("../../Service/Common/CreateService");
const DashBoardModel = require("../../Model/DashBoardModel/DashBoardModel");
const AllDetailsService = require("../../Service/Common/AllDetailsService");


// DashBoard Create
exports.DashBoardCreate = async (req, res) => {
    let Result = await CreateService(req, DashBoardModel);
    res.status(200).json(Result);
};


// DashBoard All Details
exports.DashBoardDetails = async (req, res)=>{
    let Result = await AllDetailsService(req, DashBoardModel)
    res.status(200).json(Result)
}