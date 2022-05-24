const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mp3Schema = new Schema({

    name:{type:String, required:true },
    size:{type:Number, required:true },
    type:{type:String, required:true },
    mp3File:{type:String, required:true}
});

const Mp3 = mongoose.model("Mp3", mp3Schema);

module.exports = Mp3;

