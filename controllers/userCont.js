const data = require('../database/modulo_datos');

const userCont = {
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: async function (req, res) {
        try {
            const usuario = await db.Usuario.findByPk(req.params.id, {
                include: { model: db.Producto, as: 'productos' }
            });
    
            if (!usuario) return res.status(404).send('Usuario no encontrado');
    
            res.render('profile', { usuario });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno');
        }
    },    
    createLogin: function (req,res) {
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
    }
}

module.exports = userCont;