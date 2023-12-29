const Email = require("../schema/emailSchema");
const request = require("request");
const emailSender = require('../utils/sendEmail')

const subscribeEmail = async (req, res) => {
  // try {
    emailSender()
    res.send("DONE")
   
    // const email = await Email.findOne({ email: req.body.email });
    // if (email) {
    //   res.status(200).json("subscription already added");
    //   return;
    // }
    // const response = new Email({
    //   email: req.body.email,
    // });

    // const apiKey = "f7ea05b84852069ceb4bcb411f6f6dac-us21";
    // const audienceId = "fedaf173d7";

    // const addData = {
    //   members: [
    //     {
    //       email_address: req.body.email,
    //       status: "subscribed",
    //     },
    //   ],
    // };
    // addDataJson = JSON.stringify(addData);

    // const options = {
    //   url: `https://us21.mailchimp.com/3.0/lists/${audienceId}`,
    //   method: "POST",
    //   headers: {
    //     Authorization: `auth ${apiKey}`,
    //   },
    //   body: addDataJson,
    // };

    // request(options, (error, response, body) => {
    //   if (error) {
    //     res.json({ error }); // error :(
    //   } else {
    //     res.sendStatus(200); //successful :)
    //   }
    // });

    // await response.save();
    // res.status(200).json("Subscription Added");
  // } catch (e) {
  //   res.status(404).json({ error: "Failed to add subscription" });
  // }
};

const unSubscribeEmail = async (req, res) => {
  try {
    const response = await Email.findOne({ email: req.body.email });
    if (response) {
      await Email.deleteOne({ email: req.body.email });
      res.status(200).json("subscription removed");
      return;
    }
    res.status(200).json("Email does not exist");
  } catch (e) {
    res.status(404).json({ error: "Failed to remove subscription" });
  }
};

module.exports = { subscribeEmail, unSubscribeEmail };
