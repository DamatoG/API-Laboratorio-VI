const { Router } = require("express");
const {  } = require("../controller/playlist");


routerPlayList = Router()

routerPlayList.get('/playlists/:playlist_id', getPlaylistById);



module.exports = routerPlayList;
