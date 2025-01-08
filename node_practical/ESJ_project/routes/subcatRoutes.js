const express = require('express')
const app = express()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    //genrate the file name... in diskstorage
    filename: function (req, file, cb) {
        console.log(file);
        let a = file.originalname.split('.')  //shreeRam-> '.' <-png
        console.log(a);
        let imgExtension = a[1]
        const uniqueSuffix = Date.now() + '.' + imgExtension  //u can whatver choose prefix date.now or something other
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })
// const upload = multer({dest: 'upload'})

//what is a use of express router...
const router = express.Router()

const { ins, disp, delData, editData } = require('../controllers/subcategoryController')
router.get('/', disp)
router.post('/add', upload.single('userimg'), ins)
// router.post('/upd',upd)
router.get('/del/:id', delData)
router.get('/edit/:id', editData)

module.exports = router