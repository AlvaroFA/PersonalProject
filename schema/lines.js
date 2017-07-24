const mon=require('mongoose');
const Schema= mon.Schema;

var linesSchema = new Schema({
    id: String ,
    start_line: String,
    end_line: String,
    name: String ,
    schedules_description: String,
    stops:[{
        id: String,
        name: String,
        to_get_on: Boolean,
        to_get_off : Boolean,
        region_name : String

    }]
})


var lines= mon.model('lines', linesSchema);


module.exports= lines;