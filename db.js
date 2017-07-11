const mon = require('mongoose');
mon.Promise = global.Promise;



module.exports = function(connectionLine){
    mon.connect(connectionLine);
    const db = mon.connection;

    /*AVISO
     esta forma  de conexion da un warning
     de que sta deprecated, pero esta catalogado
     como bug en la version 4.11
     Solucion: downgrade a 4.08
     */
    db.on('error',
        console.error.bind(console, 'connection error:'));
    db.once('open',
        console.log.bind(console, 'conectado'));

    return db;
};
