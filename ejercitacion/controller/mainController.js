const fs = require('fs');
const path = require('path');

const controller = {
    home: (req, res, next) => {
        res.render('index', { title: 'Express' });
    },
    register: (req, res) => {
        res.render('register', {
            title: 'Registro'
        });
    }
};

module.exports = controller;