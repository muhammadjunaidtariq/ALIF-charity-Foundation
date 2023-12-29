const joi = require("joi");
const User = require("../schema/userSignup");
const bcrypt = require("bcrypt");

const userSignup = async (req, res) => {
  const { email, name, password, phoneno } = req.body;
  const result = validateUser(req.body);
  if (result.error) {
    res.status(400).json(result.error.details[0].message);
    return;
  }

  const user = await User.findOne({ email });
  if (user) {
    res.status(400).json({ message: "Email Already register " });
    return;
  } else {
    let user = new User({name, email, password, phoneno});
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try {
      user = await user.save();
      res.status(200).json({
        message: "user created successfully",
        data: {
          name: user.name,
          id: user._id,
        },
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

function validateUser(user) {
  const { name, email, password, phoneno } = user;

  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().min(8).required(),
    phoneno: joi.string().min(11).required(),
  });

  return schema.validate({ name, email, password, phoneno });
}

module.exports = userSignup;
