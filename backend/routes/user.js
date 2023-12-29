const express = require("express");
const userSignup = require("../controller/userController")

const router = express.Router();
router.post('/', userSignup);

module.exports =  router