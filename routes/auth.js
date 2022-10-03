const { Router } = require("express");
const { getLogin, getCallback, getRefreshToken } = require("../controller/auth");


routerAuth = Router()

routerAuth.get('/login', getLogin);
routerAuth.get('/callback', getCallback);
routerAuth.get('/refresh_token', getRefreshToken);
// router.get('/login', getToken);


module.exports = routerAuth;




