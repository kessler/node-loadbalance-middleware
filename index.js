var loadbalance = require('loadbalance')

module.exports.engine = function(engine) {

	return function(req, res, next) {
		var middleware = engine.pick()
		return middleware(req, res, next)
	}
}

module.exports.random = function (middlewares) {
	var engine = loadbalance.random(middlewares)
	return module.exports.engine(engine)
}

module.exports.roundRobin = function (middlewares) {
	var engine = loadbalance.roundRobin(middlewares)
	return module.exports.engine(engine)
}
