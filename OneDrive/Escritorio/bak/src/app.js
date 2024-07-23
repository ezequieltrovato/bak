import express from 'express';
import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';
import { __dirname } from './utils.js';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { io } from 'socket.io-client';


const app = express();

//const express = require('express');
//const http = require('http');
//const { Server } = require('socket.io');
//const exphbs = require('express-handlebars');
//const path = require('path');
//const viewsRouter = require('./routes/views');
//const configureSockets = require('./sockets');
//const server = http.createServer(app);
//const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', viewsRouter);

configureSockets(io);
const port =8000;
app.listen(8000, () => {
        console.log(`Servidor escuchando en http://localhost:8000`);
});