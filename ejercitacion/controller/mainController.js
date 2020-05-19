const fs = require('fs');
const path = require('path');

const controller = {
    home: (req, res, next) => {
        res.render('index', { title: 'Express' });
    },
};

module.exports = controller;