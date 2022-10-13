const { error } = require('../helpers/apiResponse')

/**
 * @desc handle notfound routes
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
module.exports = (req, res, _) => {
	res.status(404).json(
		error(`Request Not Found 😢 - ${req.originalUrl}`, 404)
	)
}
