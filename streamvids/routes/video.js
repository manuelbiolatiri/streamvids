const { Router } = require('express');
// const verify = require('../controllers/register');
const video = require('../controllers/videos');

// configure route
const videoRouter = Router();

videoRouter.post('/video', video.postVideo);

// export comment route to server.js
module.exports = videoRouter;