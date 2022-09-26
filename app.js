//Buenas practicas a la hora de importar:
//1 - Paquetes NODE
//2 - Paquetes de terceros
//3 - Paquetes nuestros
require('dotenv').config();
const Server = require('./models/server'); //Esta clase server esta visible porque la exportamos en server.js

const server = new Server(); //Instancio la clase Server
server.listen() //Llamo al metodo listen de la clase Server