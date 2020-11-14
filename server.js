const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary')
const multer = require('multer');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path')
 
dotenv.config();

// instantiate express
const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/mp4|gif$i/)) {
        cb(new Error('File is not supported'), false)
        return
      }
  
      cb(null, true)
    }
  })

// routers
const videoRouter = require('./routes/video');
const getRouter = require('./routes/getVids');

// configure cors
app.use(cors());

const port = process.env.PORT || 3002;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    next();
})

// configure bodyparser
app.use(bodyParser.json({ extended : true }));

// configure file-upload
// app.use(fileUpload({
//     useTempFiles: true
// }))


// app router
app.use('/api/v1/', getRouter);
app.use('/api/v1/', upload.single('image'), videoRouter);

app.listen(port,() => {
    console.log(`app is running on ${port}`)
})

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {

    app.get('/', (req, res) => {
      res.status(200).json(({
          status: 'success',
          message: 'welcome to the flashtoken api'
      }))
    })
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

module.exports = app;
