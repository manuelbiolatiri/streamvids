const { Router } = require('express');
// const verify = require('../controllers/register');
const getVids = require('../controllers/getVids');

// configure route 
const getRouter = Router();

getRouter.get('/videos', getVids.getAllVids);
getRouter.get('/videos/:id', getVids.getSingleVid);

module.exports = getRouter;
