const fs = require('fs');

var fetchRoutes = () => {
    return JSON.parse(fs.readFileSync('./public/data'));
}

module.exports={
    fetchRoutes:fetchRoutes

}