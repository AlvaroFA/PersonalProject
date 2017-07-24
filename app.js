//imports
const routes = require('./routes.js');
const mon = require('mongoose');

const lines = require('./schema/lines');
const express = require('express');
const bodyparser = require('body-parser');
//Server Params
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = express();

// Use native promises
const db = require('./db')('mongodb://localhost/busapp/lines');

//launching server
app.listen(port, (error) => {
    if (error) {
        return console.log('error' + error);
    }
    console.log(`server lanzado en el puerto ${port}`);
});

//middleware, resources
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/routes', (req, res) => {
    let routesFile = routes.fetchRoutes();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(routesFile);
});

app.get('/lines', (req, res) => {
    lines.find(function (error, data) {
        if (error) {
            console.error(error);
            res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/startline/:start', (req, res) => {
    lines.find({start_line: req.params.start}).find(function (error, data) {
        if (error) {
            console.error(error);
            res.status(500).send();
        } else {

            res.status(200).send(data);
        }
    });
});

app.get('/stops/:name', (req, res) => {
    lines.find({stops:{}}).where({name:req.params}).equals({}).find(function (error, data) {
        if (error) {
            console.error(error);
            res.status(500).send();
        } else {

            res.status(200).send(data);
        }
    });
});






