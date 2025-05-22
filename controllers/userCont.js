const data = require('../db/modulo_datos');

const userCont = {
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
        res.render('profile', { usuario: data.usuario });
    },
    createLogin: function (req,res) {
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme
        }
        req.session.user = userInfo;
    
    if (userInfo.recordarme != undefined) {
        res.cookie("user", userInfo, {maxAge: 1000 * 60 * 5})
        
    }
        
    }
    
    
}


module.exports = userCont;