const Register = require("../../Service/Common/Register");
const SuperAdminModel = require("../../Model/SuperAdminModel/SuperAdminModel");
const SuperAdminLogin = require("../../Service/SuperAdminService/SuperAdminLogin");


// Super Admin Register
exports.SuperAdminRegister = async (req, res) => {
    let Result = await Register(req, SuperAdminModel);
    res.status(200).json(Result);
};


//Super Admin Login
exports.SuperAdminLogin = async (req, res)=>{
    let Result = await SuperAdminLogin(req, SuperAdminModel)
    res.status(200).json(Result)
}