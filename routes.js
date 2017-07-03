const fs = require('fs');

var getAll=()=>{
    return;

}
var fetchNotes = () => {
    return JSON.parse(fs.readFileSync('./public/data'));
}

module.exports={
    getAll:getAll,
    fetchNotes:fetchNotes

}