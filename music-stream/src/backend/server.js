const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const multer = require('multer');
const fileUpload = require('express-fileupload');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open',() => console.log('MongoDb connection open'));


const mp3Router = require('./routes')
app.use('/routes', mp3Router);

app.listen(port, () => console.log(`The app is running on port : ${port}`));








// // this is for firebase only
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
