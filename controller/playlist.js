const { request, response, query } = require('express')
const { param } = require('../routes/artista')

const axios = require('axios').default


getPlaylistById = (req = request, res = response) => {
    
    const {playlist_id} = req.params;
    
    axios.get(
            'https://api.spotify.com/v1/playlists/' + playlist_id,
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
    getPlaylistById
    }



    