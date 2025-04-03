const { createUser, findByEmail } = require('../models/userModel')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // console.log(name, email);
        if (!email) return res.status(401).send({ msg: "email missing" })

        const isExist = await findByEmail(email)
        if (isExist) return res.status(400).send({ msg: "user already exist" })

        const hashedPass = await bcrypt.hash(password, 10)
        console.log(hashedPass);

        const user = await createUser(name, email, hashedPass)
        console.log(user);
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' })
        console.log(user);
        res.status(201).json({ user, token, msg: "registered successfully" })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findByEmail(email)
        // console.log(user);
        if (!user) return res.status(404).send({ msg: "user not found" })

        const isMatched = await bcrypt.compare(password, user.password);
        console.log(isMatched);
        if (!isMatched) return res.status(400).send({ msg: "Invalid credentials" });


        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.status(200).json({ token, msg: "login successfully" })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error" })
    }

}

module.exports = { register, login }