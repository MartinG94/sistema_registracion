const fs = require('fs');
const path = require('path');

const controller = {
    root: (req, res, next) => {
        res.render('users', {
            title: 'Usuarios'
        });
    },
    register: (req, res) => {
        res.render('register', {
            title: 'Registro'
        });
    }
};

module.exports = controller;