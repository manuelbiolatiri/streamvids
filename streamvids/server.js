const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require('express-fileupload');
 
dotenv.config();

// instantiate express
const app = express();

// routers
const videoRouter = require('./routes/video');
const getRouter = require('./routes/getVids');

// configure cors
app.use(cors());

const port = process.env.PORT || 3002;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    next();
})

// configure bodyparser
app.use(bodyParser.json({ extended : true }));

// configure file-upload
app.use(fileUpload({
    useTempFiles: true
}))


// app router
app.use('/api/v1/', videoRouter);
app.use('/api/v1/', getRouter);

// welcome route
if (process.env.NODE_ENV === 'production') {

    app.get('/', (req, res) => {
      res.status(200).json(({
          status: 'success',
          message: 'welcome to the flashtoken api'
      }))
    })

// wronge routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        error: 'wrong route'
    })
})

app.listen(port,() => {
    console.log(`app is running on ${port}`)
})
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
