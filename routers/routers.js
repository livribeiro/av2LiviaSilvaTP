const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router.get('/api/v1/bills', controller.gettAll)
router.post('/api/v1/bills', controller.create)
router.delete('/api/v1/bills', controller.remove)

module.exports = router