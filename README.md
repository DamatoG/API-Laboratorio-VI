# API-Laboratorio-VI

API Rest para la materia Laboratorio de Computación VI de la Tecnicatura Universitaria en Programación.
Realizada con el node.js y Express y consumiendo la API publica de Spotify.

Pasos para ejecutar la aplicacion en entorno local:
1- Clonar repositorio
2- Correr en cosola npm init

Cada consulta a la API utiliza un access token para realizar peticiones a la API de Spotify. Pasos para para obtenerlo:

1- Ingresar a: https://developer.spotify.com/dashboard

2- Login con usuario y contraseña personal de Spotify

3- Crear nueva aplcación

4- Realizar una peticion post a la la url https://accounts.spotify.com/api/token, enviando en el header una autorizacion basic codificada en base64 utilizando client_id y client_secret otorgado por sportify

ej:
headers: {
        'Authorization': 'Basic ' + (new Buffer(String(client_id) + ':' + String(client_secret)).toString('base64'))
      }
      
La respuesta de dicha peticion es un access_token, el cual es necesario configurar en la variable de entorno ACCESS_TOKEN


DOCUMENTACION JSON --> https://documenter.getpostman.com/view/18076612/2s83zdwS74
