const express = require('express')
const { ins,disp, delData, editData } = require('../controllers/categoryController_copy')

const app = express()
const router = express.Router()


// all func in router works..
router.get('/',disp)
router.post('/add',ins)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)

module.exports = router