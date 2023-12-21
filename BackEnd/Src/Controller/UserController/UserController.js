const Register = require("../../Service/Common/Register");
const UserModel = require("../../Model/UserModel/UserModel");
const UserLogin = require("../../Service/UserService/UserLogin");


// User Register
exports.UserRegister = async (req, res) => {
    let Result = await Register(req, UserModel);
    res.status(200).json(Result);
};


//User Login
exports.UserLogin = async (req, res)=>{
    let Result = await UserLogin(req, UserModel)
    res.status(200).json(Result)
}
