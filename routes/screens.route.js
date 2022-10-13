const router = require('express').Router()
const { alive, screenshot } = require('../controllers/screens.controller')

router.get('/alive', alive)
router.post('/screenshot', screenshot)

module.exports = router
