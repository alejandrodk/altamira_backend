import createError from 'http-errors';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import helmet from 'helmet';
import Database from '../common/database';

import Main from '../components/main/mainAPI';
import Productos from '../components/productos/productosAPI';
import Lineas from '../components/lineas/lineasAPI';
import Rubros from '../components/rubros/rubrosAPI';

class App {
  async init(app, server) {
    const result = dotenv.config();
    if (result.error) throw result.error;

    // Database init
    const db = new Database();
    db.init();

    // compress all responses
    app.use(compression());

    // CORS
    app.use(cors());

    // Secure HTTP Headers
    app.use(helmet());

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // logging
    app.use(morgan('dev'));

    // Middlewares
    app.use(express.static(path.join(__dirname, '../../public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(methodOverride('_method'));

    // Routes
    const main = new Main();
    const productos = new Productos();
    const lineas = new Lineas();
    const rubros = new Rubros();

    app.use('/', main.init());
    app.use('/productos', productos.init());
    app.use('/lineas', lineas.init());
    app.use('/rubros', rubros.init());

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
}

export default App;
