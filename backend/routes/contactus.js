const express = require("express");
const {submitQuery, getQueries} = require("../controller/contactusController")

const router = express.Router();

router.post("/", submitQuery);
router.get('/', getQueries)

module.exports = router;
