const express = require("express");
const authUser = require("../controller/authController")

const router = express.Router();
router.post('/', authUser);

module.exports =  router