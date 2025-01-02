const express = require('express')
const app = express()

//what is a use of express router...
const router = express.Router()

const {ins,disp,delData,editData} = require('../controllers/categorycontroller')
router.get('/',disp)
router.post('/add',ins)
// router.post('/upd',upd)
router.get('/del/:id',delData)
router.get('/edit/:id',editData)

module.exports = router