const express = require('express');
const axios = require('axios');
const app = express();

app.get('/*', async (req, res) => {
    try {
        const path = req.params[0] || '';
        const response = await axios.get(`http://169.254.169.254/${path}`, {
            timeout: 10000
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app;
