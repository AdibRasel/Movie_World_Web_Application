const CreateService = require("../../Service/Common/CreateService");
const MenuModel = require("../../Model/MenuList/MenuModel");
const AllDetailsService = require("../../Service/Common/AllDetailsService");


// Office Register
exports.MenuCreate = async (req, res) => {
    let Result = await CreateService(req, MenuModel);
    res.status(200).json(Result);
};


// Header All Details
exports.HeaderDetails = async (req, res)=>{
    let Result = await AllDetailsService(req, MenuModel)
    res.status(200).json(Result)
}