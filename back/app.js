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
app.use(bodyparser.urlencoded({ extended: false }));


// only for local file use
app.use('/routes', (req, res) => {
    let routesFile = routes.fetchRoutes();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(routesFile);
});

//retrieve all lines
app.get('/lines', (req, res) => {
    lines.find({},{'stops':0},dataToResponse(res, req));    
});

app.get('/lines/:id', (req, res) => {
    lines.findOne({'_id':req.params.id },{},dataToResponse(res, req));    
});


app.get('/stops/:str_stop/:end_stop', (req, res) => {
    let query = lines.find({ 'stops.name': req.params.name });
    query.exec(dataToResponse(res, req))
});


//retreieve all lines who have the stop request
app.get('/stops/:name', (req, res) => {
    let query = lines.find({ 'stops.name': req.params.name });
    query.exec(dataToResponse(req, res));
});


//retrieve lines from stops partial text search
app.get('/search/:stopName/', (req, res) => {
    let value = new RegExp(req.params.stopName, 'g');
    let query = lines.find({ 'stops.name': { $regex: value } }, { 'stops': 0 });
    query.exec(dataToResponse(req, res));
});





var dataToResponse = function (res, req) {
    //if(developmerMode){
    res.setHeader('Access-Control-Allow-Origin', '*');
    //}
    return function (error, data) {
        if (error) {
            console.error(error);
            res.status(500).send();
        } else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).send(data);
        }
    }
};


app.get('/stops/', (req, res) => {
    lines.find({ '_id': req.params.id }).find(dataToResponse(res, req));
});
