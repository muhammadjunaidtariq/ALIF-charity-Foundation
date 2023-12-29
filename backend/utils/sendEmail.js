const nodemailer = require("nodemailer");
const Email = require('../schema/emailSchema')

const sendEmail = async (req, res) => {
  try {
    // const email = await Email.find({ _id: req.body.doctorId }).select(
    //   "email"
    // );

    const mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ahtashamali477@gmail.com",
        pass: "lwge xnrm wjdn vbtx",
      },
    });

    let detail = {
      from: process.env.SENDER_MAIL_ADDRESS,
      to: "ahtashamali2727@gmail.com muhammadtariqjaved297@gmail.com",
      subject: "Alif testing",
      text: "testing testing",
    };

    const result = mailTransporter.sendMail(detail);
    res.status(200).json({message:"Appointment Booked", data:result.messageId});
  } catch (e) {
    console.log(e);
  }
};

module.exports = sendEmail