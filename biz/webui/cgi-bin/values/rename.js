var values = require('../../lib/values');

module.exports = function(req, res) {
	values.add(req.body.key, req.body.newKey);
	res.json({ec: 0, em: 'success'});
};