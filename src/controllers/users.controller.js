const User = require('../models/user');
const jwt = require('jsonwebtoken');

async function create(req, res) {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (err) {
        res.status(400).json({ message: 'One of the parameters is incorrect' });
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(403).json({ message: 'One or more of the parameters are missing' });
        return;
    }
    const userExist = await User.findOne({ username, password });
    if (!userExist) {
        res.status(403).json({ message: 'One of the paramateres is incorrect' });
        return;
    }
    const token = jwt.sign({ id: userExist._id }, 'shahar');

    res.json({ token });
}

async function isAvailable(req, res) {
    const { username } = req.body;
    const doesExist = await User.findOne({ username });
    res.send(!doesExist);
}

module.exports = {
    create,
    login,
    isAvailable
};