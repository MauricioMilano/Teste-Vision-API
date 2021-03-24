// const express = require('express')
// const app = express()
// const port = 3000
// app.use('/', express.static(__dirname + '/dist'));
// app.post("/processa", (req, res)=>{

// });

// app.listen(process.env.PORT || port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
var express = require('express');   //Express Web Server 
var path = require('path');     //used for file path
var bodyParser = require('body-parser'); //connects bodyParsing middleware
const uploadController = require('./controllers/uploadController');
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));

/* ========================================================== 
 bodyParser() required to allow Express to see the uploaded files
============================================================ */
app.use(bodyParser({defer: true}));
 app.route('/upload')
 .post(async function (req, res, next) {
    return await uploadController.upload(req,res,next);
  
});
var server = app.listen(3030, function() {
console.log('Listening on port %d', server.address().port);
});