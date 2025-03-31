const { createUser, findByEmail } = require('../models/userModel')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // console.log(name, email);
        if (!email) return res.status(401).send({ msg: "email missing" })

        const isExist = await findByEmail(email)
        if (isExist) return res.status(400).send({ msg: "user already exist" })

        const user = await createUser(name, email, password)
        console.log(user);
        res.status(201).json(user)
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
        console.log(user);
        if (!user) return res.status(404).send({ msg: "user not found" })

        if (user.password !== password) return res.status(400).send({ msg: "invalid credentials" })

        res.status(200).json(user)
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error" })
    }

}

module.exports = { register, login }