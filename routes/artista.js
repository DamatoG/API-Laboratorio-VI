const { Router } = require("express");
const { getArtista, getAutores, getTracksPopularesByArtista } = require("../controller/artista");

const router = Router();



router.get('/artista/:id', getArtista);
router.get('/artista/:id/top-tracks', getTracksPopularesByArtista);


module.exports = router;