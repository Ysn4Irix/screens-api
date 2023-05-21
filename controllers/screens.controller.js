const uptimeFormat = require('../helpers/upTime')
const { success, error, validation } = require('../helpers/apiResponse')
const logger = require('../helpers/logger')
const puppeteer = require('puppeteer')
const validate = require('../helpers/validations')

module.exports = {
	/**
	 * @desc check whatever the server is up or not
	 * @param {import('@types/express').Request} _
	 * @param {import('@types/express').Response} res
	 * @returns {object} object
	 */
	alive: (_, res) => {
		try {
			res.status(200).json(
				success("🎉I'm alive", {
					upTime: uptimeFormat(process.uptime())
				})
			)
		} catch (err) {
			logger.error(err.message)
			res.status(500).json(
				error(
					'Oops! We have an problem verify you url',
					res.statusCode
				)
			)
		}
	},
	/**
	 * @desc handle screenshot process
	 * @param {import('@types/express').Request} req
	 * @param {import('@types/express').Response} res
	 * @returns {object} object
	 */
	screenshot: async (req, res) => {
		// validate the json body
		const { error: validationErr } = validate(req.body)
		if (validationErr) {
			res.status(422).json(validation(validationErr.message))
			return
		}

		const { url, width, height } = req.body

		try {
			// Make Puppeteer Start Faster
			const minimal_args = [
				'--autoplay-policy=user-gesture-required',
				'--disable-background-networking',
				'--disable-background-timer-throttling',
				'--disable-backgrounding-occluded-windows',
				'--disable-breakpad',
				'--disable-client-side-phishing-detection',
				'--disable-component-update',
				'--disable-default-apps',
				'--disable-dev-shm-usage',
				'--disable-domain-reliability',
				'--disable-extensions',
				'--disable-features=AudioServiceOutOfProcess',
				'--disable-hang-monitor',
				'--disable-ipc-flooding-protection',
				'--disable-notifications',
				'--disable-offer-store-unmasked-wallet-cards',
				'--disable-popup-blocking',
				'--disable-print-preview',
				'--disable-prompt-on-repost',
				'--disable-renderer-backgrounding',
				'--disable-setuid-sandbox',
				'--disable-speech-api',
				'--disable-sync',
				'--hide-scrollbars',
				'--ignore-gpu-blacklist',
				'--metrics-recording-only',
				'--mute-audio',
				'--no-default-browser-check',
				'--no-first-run',
				'--no-pings',
				'--no-sandbox',
				'--no-zygote',
				'--password-store=basic',
				'--use-gl=swiftshader',
				'--use-mock-keychain'
			]

			const browser = await puppeteer.launch({
				headless: 'new',
				defaultViewport: {
					width: parseInt(width),
					height: parseInt(height)
				},
				args: minimal_args
			})

			const page = await browser.newPage()

			const blocked_domains = [
				'googlesyndication.com',
				'adservice.google.com',
				'www.google-analytics.com',
				'ads.google.com'
			]

			await page.setRequestInterception(true)
			page.on('request', request => {
				const url = request.url()
				if (blocked_domains.some(domain => url.includes(domain)))
					request.abort()
				else request.continue()
			})

			await page.goto(url, {
				waitUntil: 'load',
				timeout: 50000
			})

			const result = await page.screenshot({
				encoding: 'base64'
			})

			await browser.close()

			res.status(200).json(
				success('🎉 Done', { base64: result }, res.statusCode)
			)
		} catch (err) {
			logger.error(err.message)
			res.status(500).json(
				error(
					'Oops! We have an problem verify you url',
					res.statusCode
				)
			)
		}
	}
}
