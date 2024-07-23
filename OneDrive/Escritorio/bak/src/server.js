import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import viewsRouter from './routes/views.js';
import configureSockets from './sockets/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el motor de plantillas Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar el router de vistas
app.use('/', viewsRouter);

// Configurar sockets
configureSockets(io);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});