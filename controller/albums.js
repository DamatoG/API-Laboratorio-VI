const { request, response } = require('express')

const axios = require('axios').default



getNewAlbums = (req = request, res = response) => {
    
    
    axios.get(
            'https://api.spotify.com/v1/search?q=tag:new&type=album',
            {headers:{
                "Authorization" : "Bearer " + process.env.ACCESS_TOKEN,
            }})
        .then(response => {
            console.log(response.data)
            //Estandarizar formatos de salida json
            res.status(200).json(response.data);
        })
        .catch((error) => {
            // Cannot read properties of undefined (reading 'data')
            //console.log(error.response.data)
            //Estandarizar formatos de salida json
            //console.log(error);
            const errorCode = error.status || 400;
            res.status(errorCode).json({
                msg:error?.message,
                code:error?.code,
                status:error?.status,
            });
    })
}

module.exports = {
    getNewAlbums
}



    