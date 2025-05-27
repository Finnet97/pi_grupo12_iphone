const db = require('../database/models');
const bcrypt = require('bcryptjs');

const userCont = {
    registerVista: function(req, res) {
        res.render('register');
    },
    registerGuardar: function(req, res) {
        let userInfo = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10), // Hashear la contra
            fechaNacimiento: req.body.fechaNacimiento,
            dni: req.body.documento,
            fotoPerfil: req.body.fotoPerfil
        }

        db.Usuario.create(userInfo);

        res.redirect("/");
        // res.redirect("/user/profile/" + db.Usuario.id);
    },
    loginVista: function(req, res) {
        res.render('login');
    },
    loginProcesar: function(req, res) {
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme
        }
        req.session.user = userInfo;
    
        if (userInfo.recordarme != undefined) {
            res.cookie("user", userInfo, {maxAge: 1000 * 60 * 10})   
        }
    },
    logout: function (req, res) {
        return req.session.destroy();
    },
    profile: function (req, res) {
        db.Usuario.findByPk(req.params.id, {
          include: {
            model: db.Producto,
            as: 'productos'
          }
        })
        .then(usuario => {
          res.render('profile', { usuario });
        })
        .catch(error => {
          console.error(error);
        });
    }
}

module.exports = userCont;