const { request, response, query } = require('express')
const { param } = require('../routes/artista')

const axios = require('axios').default


getArtista = (req = request, res = response) => {
    
    const {id} = req.params;
    
    axios.get(
            'https://api.spotify.com/v1/artists/' + id,
            {headers:{
                "Authorization" : "Bearer " + process.env.ACCESS_TOKEN,
            }})
        .then(response => {
            console.log(response.data)
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error.response.data)
            res.send(error.response.data);
    })
}

module.exports = {
    getArtista}



    