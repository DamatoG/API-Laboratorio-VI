const { Router } = require("express");
const { getArtista, getAutores, getTracksPopularesByArtista } = require("../controller/artista");

const router = Router();

router.get('/artista/:id', getArtista);

module.exports = router;