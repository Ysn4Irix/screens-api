const Joi = require('joi')

const options = {
	abortEarly: false,
	errors: {
		wrap: {
			label: ''
		}
	}
}

/**
 *
 * @param {string} data
 * @returns {import('joi').ValidationResult}
 */
module.exports = data => {
	const schema = Joi.object({
		url: Joi.string()
			.trim()
			.uri()
			.required()
			.pattern(
				new RegExp(
					/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
				)
			)
			.error(new Error('A valid url is required!')),
		width: Joi.number().required(),
		height: Joi.number().required()
	})
	return schema.validate(data, options)
}
