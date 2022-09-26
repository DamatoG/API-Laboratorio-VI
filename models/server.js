const express = require('express')
const cors = require ('cors')
class Server {

    constructor(){
        //Cada vez que esta clase se instancio:
        //1- Se vincula la variable app a express
        this.app = express();
        this.middleware(); // Un middleware bloquea/permite el acceso a certas rutas
        //Se llama al metodo router y configura las rutas
        this.router();
        this.port = process.env.PORT;
    }

    //Metodos

    middleware(){
       this.app.use(cors());
       this.app.use(express.static('public'));
    }


    router (){
        // this.app.get('/', (req, res) => {
        //     res.send('Hello World!')
        //   })
          
        this.app.get('/user', (req, res) => {
              res.send('Listado de usuarios')
            })
          
        
        //Esta ruta atrapa a todos los endpoint que no estan declarados
        this.app.all('*', (req, res) => {
            res.send('400 Página no encontrada')
        })
    }

    //Metodo que pone a escuchar al puerto declarado en la variable de entorno PORT o en su defecto en el puerto 3000
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }

}

//Exporto la clase server para utilizarla en otro directorio
module.exports = Server;