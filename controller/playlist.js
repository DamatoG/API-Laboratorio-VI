const { request, response, query } = require('express')
const { param } = require('../routes/artista')

const axios = require('axios').default


//Playlist segun id
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

//Tracks de una playlist
getTracksDePlaylist = (req = request, res = response) => {

    const {playlist_id} = req.params;

    axios.get(
        'https://api.spotify.com/v1/playlists/' + playlist_id +'/tracks',
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


//Filtrar tracks de playlist por popularidad
buscarTrackPorPopularidad = (req = request, res = response) => {

    const {playlist_id} = req.params;
    let {popularity} = req.query



    axios.get(
        'https://api.spotify.com/v1/playlists/' + playlist_id +'/tracks',
        {headers:{
            "Authorization" : "Bearer " + process.env.ACCESS_TOKEN,
        }})
    .then(response => {
        let tracks = response.data.items


        if(popularity){
            tracks = tracks.filter((cancion) => cancion.track.popularity > popularity)
        }
        res.status(200).json(tracks);
    })
    .catch((error) => {
        res.send(error.response);
})
}

module.exports = {
    getPlaylistById,
    getTracksDePlaylist,
    buscarTrackPorPopularidad
    
    }



    