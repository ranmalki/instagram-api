const User = require('../models/user');

module.exports = {
    create: async (req, res) => {
        const user = new User(req.body);
        try {
            const savedUser = await user.save();
            res.status(201).send(savedUser);
        } catch (err) {
            res.status(400).send(err);
        }
    }
};