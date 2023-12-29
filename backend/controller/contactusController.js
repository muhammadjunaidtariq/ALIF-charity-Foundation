const ContactUs = require("../schema/contactSchema");

const submitQuery = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const query = new ContactUs({
      name,
      email,
      message,
    });

    await query.save();
    res.status(200).json({
      message: "Your Query Submitted Successfilly ",
      data: query,
    });
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

const getQueries = async (req, res) => {
  res.send("All");
};

module.exports = {
  submitQuery,
  getQueries,
};
