const Mp3 = require('../backend/mp3')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const multer = require('multer');
const fileUpload = require('express-fileupload');

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

// get mp3 files
router.get("/", (req, res) => {
    Mp3.find()
        .then((mp3)=> res.json(mp3))
        .catch((err) => res.status(400).json(`Error: ${err}`));

});

// new mp3 upload
router.post("/add", upload.single("mp3File"), (req,res)=> {
    const newMp3 = new Mp3({
        name: req.body.name,
        size: req.body.name,
        type: req.body.type,
        mp3File: req.file.originalname,

    })
    newMp3
        .save()
        .then(() => res.json("New Article posted!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));

});

router.get("/:id", (req,res) => {
    Mp3.findById(req.params.id)
        .then((mp3File) => res.json(mp3File))
        .catch((err) => res.status(400).json(`Error: ${err}`))

});

router.put("/update/:id", upload.single("mp3File"), (req, res) => {
    Mp3.findById(req.params.id)
        .then((mp3File) => {
            Mp3.name = req.body.name;
            Mp3.size = req.body.size;
            Mp3.type = req.body.type;
            Mp3.mp3File = req.file.originalname;

        })

})

module.exports = router;