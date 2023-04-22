const express = require('express')
const router = express.Router();
const multer = require('multer');
const { createUser, getAllUsers, getUser, editUser, deleteUser } = require('../controllers/userController');


router.post('/add', createUser);
router.get('/all', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser)

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
   
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
   
var upload = multer({ storage: storage })

router.post('/upload', upload.array('blogimage'), (req, res) => {
    let fileInfo = req.files;
    console.log(fileInfo)
    console.log(req.body.title);
    return res.send(fileInfo);
});


module.exports=router;
