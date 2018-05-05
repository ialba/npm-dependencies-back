import "reflect-metadata";
import * as express from "express";
import {Server} from "typescript-rest";
import {json, urlencoded} from 'body-parser';


import { DependenciesController } from './controllers/DependenciesController';


let app: express.Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Server.buildServices(app, DependenciesController);


app.listen(3000, function() {
  console.log('Servidor escuchando en el puerto 3000');
});
