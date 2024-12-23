const express = require('express')
const { ins,disp, delData, editData } = require('../controllers/categoryController')

const app = express()
const router = express.Router()


router.get('/',disp)
router.post('/add',ins)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)

module.exports = router