const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {

    const token = req.headers.authorization;
    console.log(req.headers);
    console.log("token", token);
    if (!token) return res.status(400).send({ msg: "unauthorized" })
    const verified = jwt.verify(token, "top-secret")
    console.log("verified", verified);
    if (!verified) return res.status(400).send({ msg: "unauthorized" })

    req.user = verified;
    next()

}
module.exports = verifyToken;