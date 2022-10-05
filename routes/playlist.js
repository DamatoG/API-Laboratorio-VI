const { Router } = require("express");
const { getTracksByPlaylist, buscarTrackPorPopularidad } = require("../controller/playlist");


routerPlayList = Router()

routerPlayList.get('/playlists/:playlist_id', getPlaylistById);
routerPlayList.get('/playlists/:playlist_id/tracks', getTracksDePlaylist);
routerPlayList.get('/playlists/:playlist_id/tracks/find', buscarTrackPorPopularidad);


module.exports = routerPlayList;
