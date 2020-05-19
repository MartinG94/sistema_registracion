const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const controller = {
    root: (req, res, next) => {
        res.render('users', {
            title: 'Usuarios'
        });
    },
    formRegister: (req, res) => {
        res.render('register', {
            title: 'Registro'
        });
    },
    register: (req, res, next) => {
        const body = req.body;
        if(body.password != body.repeat_password){
            res.send('Las contraseñas no coinciden!');
        };
        const listaUsuarios = JSON.parse(fs.readFileSync('data/usuarios.json'));
        const cantidadUsuarios = listaUsuarios.length;
        const nuevoUsuario = {
            nombre: body.nombre,
            apellido: body.apellido,
            email: body.email,
            password: body.password,
        };
        listaUsuarios.push(nuevoUsuario);
        fs.writeFileSync('data/usuarios.json', JSON.stringify(listaUsuarios));
        res.send('Registro con Éxito');
    },
    profile: (req, res) => {
        res.send('Perfil!');
    }
};

module.exports = controller;