//imports
const routes= require('./routes.js');
const express = require('express');
const bodyparser = require('body-parser');

//Server Params
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = express();


//launching server
app.listen(port, (error) => {
    if(error){
        return console.log('error' + error);
    }
    console.log(`server lanzado en el puerto ${port}`);
})
;

//middleware, resources
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/routes', (req, res) => {
    let routesFile = routes.fetchNotes();
res.setHeader('Access-Control-Allow-Origin','*');
res.status(200).send(routesFile);
});
