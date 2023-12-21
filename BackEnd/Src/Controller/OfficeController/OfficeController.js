const Register = require("../../Service/Common/Register");
const OfficeModel = require("../../Model/OfficeModel/OfficeModel");
const OfficeLogin = require("../../Service/OfficeService/OfficeLogin");


// Office Register
exports.OfficeRegister = async (req, res) => {
    let Result = await Register(req, OfficeModel);
    res.status(200).json(Result);
};



//Office Login
exports.OfficeLogin = async (req, res)=>{
    let Result = await OfficeLogin(req, OfficeModel)
    res.status(200).json(Result)
}
