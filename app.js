var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Rutas
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var productRouter = require('./routes/product');

var app = express();

// Conexión a base de datos
const db = require('./models');
db.sequelize.authenticate()
  .then(() => {
    console.log('✔ Conexión a la base de datos exitosa');
  })
  .catch(err => {
    console.error('✖ Error al conectar con la base de datos:', err);
  });

// Sincronización (solo en desarrollo)
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('✔ Modelos sincronizados con la base de datos');
  })
  .catch(err => {
    console.error('✖ Error al sincronizar modelos:', err);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;