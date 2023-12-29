const jwt = require("jsonwebtoken");

function isAuth(req, res, next) {
  // const token = req.headers.bearer.split(" ")[1];
  const token = req.headers.bearer;
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, "jwtPrivateKey");
    console.log("decode: ", decoded);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = isAuth;