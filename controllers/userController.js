const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const credentials = req.body;
        const requiredFields = ["firstName", "lastName", "email", "password", "user_type", "date_of_birth", "login_with", "facebook_id", "twitter_id", "about", "status"];

        validateFields(credentials, requiredFields);

        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            user_type: req.body.user_type,
            date_of_birth: req.body.date_of_birth,
            login_with: req.body.login_with,
            facebook_id: req.body.facebook_id,
            twitter_id: req.body.twitter_id,
            about: req.body.about,
            status: req.body.status,
        }

        const newUser = await userService.createUser(data);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const newFirstName = req.body.firstName;
        const updatedUser = await userService.updateUser(id, newFirstName);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await userService.deleteUser(id);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const validateFields = (data, requiredFields) => {
    requiredFields.forEach(field => {
        if (!data[field]) {
            throw new Error(`Not found ${field}`);
        }
    });
};


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
};
