const { Router } = require("express");
const { getNewAlbums } = require("../controller/albums");

const router = Router();

router.get('/', getNewAlbums);

module.exports = router;