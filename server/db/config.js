const config = {
  database: 'caree_center',
  username: 'root',
  password: '5789887',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = config;