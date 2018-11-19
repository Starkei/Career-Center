module.exports = function(app) {
    const owners = require('../controllers/owner.controller.js');
    app.get('/api/owners', owners.findAll);    
}