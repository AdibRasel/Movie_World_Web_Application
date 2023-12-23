const express =require('express');
const SuperAdminController = require('../controller/SuperAdminController/SuperAdminController');
const OfficeController = require('../controller/OfficeController/OfficeController');
const UserController = require('../controller/UserController/UserController');
const MenuController = require("../Controller/MenuController/MenuController");
const DashBoardController = require("../Controller/DashBoardController/DashBoardController")
const TrailerController = require("../Controller/TrailerController/TrailerController");
const MovieController = require("../Controller/MovieController/MovieController");
const AuthVerifyMiddleware = require('../Middleware/AuthVerifyMiddleware');

const Router =express.Router();


// Super Admin Register
Router.post("/SuperAdminRegister", SuperAdminController.SuperAdminRegister);
// Super Admin Login
Router.post("/SuperAdminLogin", SuperAdminController.SuperAdminLogin);



// Office Register
Router.post("/OfficeRegister", OfficeController.OfficeRegister);
// Office Register
Router.post("/OfficeLogin", OfficeController.OfficeLogin);



// User Register
Router.post("/UserRegister", UserController.UserRegister);
// User Login
Router.post("/UserLogin", UserController.UserLogin);



// Menu Create 
Router.post("/MenuCreate", MenuController.MenuCreate)
// Header Details 
Router.get("/HeaderDetails", MenuController.HeaderDetails)



// DashBoard Create
Router.post("/DashBoardCreate", DashBoardController.DashBoardCreate)
// DashBoard Details
Router.get("/DashBoardDetails", DashBoardController.DashBoardDetails)



// Trailer Create
Router.post("/TrailerCreate", TrailerController.TrailerCreate)








// Bollywood Movies Create
Router.post("/BollywoodMoviesCreate", AuthVerifyMiddleware, MovieController.BollywoodMoviesCreate)
// Bollywood Movies Details
Router.get("/BollywoodMoviesDetails", AuthVerifyMiddleware, MovieController.BollywoodMoviesDetails)



// Hollywood Movies Create
Router.post("/HollywoodMoviesCreate", AuthVerifyMiddleware, MovieController.HollywoodMoviesCreate)
// Hollywood Movies Details
Router.get("/HollywoodMoviesDetails", AuthVerifyMiddleware, MovieController.HollywoodMoviesDetails)

// AllMovie Movies Details
Router.get("/AllMovieMoviesDetails", AuthVerifyMiddleware, MovieController.AllMovieMoviesDetails)




















module.exports=Router