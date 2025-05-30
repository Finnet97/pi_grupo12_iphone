const db = require('../database/models');
const bcrypt = require('bcryptjs');

const userCont = {
    registerVista: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('register')
        }
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
        //res.redirect("/user/profile/" + userInfo.id);
    },
    loginVista: function(req, res) {
        res.render('login');
    },
    loginProcesar: function(req, res) {
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            remember: req.body.remember
        }

        if (req.session.user) {
            return res.redirect('/user/profile/' + req.session.user.id);
        }

        db.Usuario.findOne({
            where: { email: userInfo.email }
        })
        .then(function(usuario) {
            if (!usuario) {
                return res.render('login', { error: "Email no registrado" });
            }
    
            const contraCoincide = bcrypt.compareSync(userInfo.password, usuario.password);
            if (!contraCoincide) {
                return res.render('login', { error: "Contraseña incorrecta" });
            }
    
            req.session.user = usuario;
    
            if (userInfo.remember) {
                res.cookie('userId', usuario.id, { maxAge: 1000 * 60 * 5 });
            }
    
            return res.redirect("/user/profile/" + usuario.id);
        })
        .catch(function (error) {
            console.error(error);
        });
    },
    loginDestroy: function (req, res) {
        res.clearCookie('userId');
        req.session.destroy();
        res.redirect('/');
    },
    profile: function(req, res) {
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