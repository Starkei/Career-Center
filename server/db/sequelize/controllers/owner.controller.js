const db = require("../sequelize.config.js");

const Owner = db.owners;

exports.findAll = (req, res) => {
    Owner.findAll().then( owners => {
        res.send(owners);
    });
}

exports.create = (req, res) => {	
	let owner = req.body;
	Owner.create(owner).then(result => {		
		res.json(result);
	});
};