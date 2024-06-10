const statusService = require('../services/statusService');

const createStatus = async (req, res) => {
    try {
        const credentials = req.body;
        const requiredFields = ["name", "code", "status"];

        const validationError = validateFields(credentials, requiredFields, res);
        if (validationError) {
            return;
        }

        data = {
            name: req.body.name,
            code: req.body.code,
            status: req.body.status
        }

        const status = await statusService.createStatus(data);
        if (status) {
            res.status(200).json(status);
        } else {
            res.status(404).send("Status could not be created.");
        }

    } catch (err) {
        console.error("Error ", err);
        res.status(500).send(err);
    }
}

const updateStatus = async (req, res) => {
    try {
        data = {
            id: parseInt(req.params.id),
            name: req.body.name,
            code: req.body.code,
            status: req.body.status
        }
        
        const status = await statusService.updateStatus(data);
        if (status) {
            res.status(200).json(status);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        console.error("Error ", err);
        res.status(500).send(err);
    }
}

const validateFields = (data, requiredFields, res) => {
    for (const field of requiredFields) {
        if (!data[field]) {
            res.status(400).send(`Not found ${field}`);
            return true;
        }
    }
    return false;
};

module.exports = {
    createStatus,
    updateStatus
}