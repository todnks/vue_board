const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const fs = require('fs');
const ejs = require('ejs');
const app = express();

app.use(cors())
app.set('views', __dirname + "/views");
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log('server open on port 3000');
})

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


var router = require('./router/router')(app,fs);