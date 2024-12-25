const express = require('express')
const { ins,disp, delData, editData } = require('../controllers/categoryApicontroller')

const app = express()
const router = express.Router()


// all func in router works


router.get('/',disp)  //get use to show  & geting the data
router.post('/add',ins) //post use for posting a data in database 
router.delete('/del/:id',delData) //delete use to remove data in database
router.patch('/edit/:id',editData) //patch use for improvise on data into database

// Update
// router.put('/edit/:id',editData) //------>//put use to update a data into databse

module.exports = router

