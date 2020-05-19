const fs = require('fs');
const bcrypt = require('bcrypt');
const multer = require('multer');

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
            return;
        };
        const listaUsuarios = JSON.parse(fs.readFileSync('data/usuarios.json'));
        const mailExistente = (listaUsuarios.map( (usuario) => {
            return usuario.email;
        })).includes(body.email);
        if(mailExistente){
            res.send('El mail ya está registrado!');
            return;
        };
        const cantidadUsuarios = listaUsuarios.length;
        const nuevoID = cantidadUsuarios + 1;
        const nuevoUsuario = {
            id: nuevoID,
            nombre: body.nombre,
            apellido: body.apellido,
            email: body.email,
            deleted: false,
            password: bcrypt.hashSync(body.password, 12),
            avatar: req.file.filename,
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