const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileUpload = require('express-fileupload');
const Mp3 = require('../backend/mp3')

const app = express();

const storage = multer.diskStorage({
    destination:(req, file , callback) => {
        callback(null,".../public/upload")
    },
    filename:(req,file, callback) =>{
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});
// crud
router.get('/', (req, res) => {
    Mp3.find()
        .then((mp3))

})




// this is for firebase only
app.use(fileUpload());



app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No files were uploaded'});
    }
    const file = req.files.file;
// where i put file in db
    file.mv(`${__dirname}/music-stream/public/uploads/${file.name}`, err =>{
        if (err){
            console.error(err);
            return res.status(500).send(err);
        }
    });
    res.json({ fileName: file.name, filePath: `/upload/${file.name}` });
});

app.listen(5000, () => console.log('Server Started!'));
