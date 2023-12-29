const express = require("express");
const Email = require("../controller/emailController");
const { subscribeEmail, unSubscribeEmail } = Email;

const router = express.Router();

router.post("/subscribe", subscribeEmail);
router.post("/unsubscribe", unSubscribeEmail);

module.exports = router;
