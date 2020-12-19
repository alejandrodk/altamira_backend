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

class App {
  async init(app, server) {
    const result = dotenv.config();
    if (result.error) throw result.error;

    // compress all responses
    app.use(compression());

    // CORS
    app.use(cors());

    // Secure HTTP Headers
    app.use(helmet());

    // logging
    app.use(morgan('dev'));

    // Middlewares
    app.use(express.static(path.join(__dirname, '../../public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(methodOverride('_method'));

    // Routes

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
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
