const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bannerSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    
    detail:{
        type:String,
        required:true
    }, 
    image:{
        type:String,
        required:true
    },
    
   
}, { timestamps: true });

module.exports = mongoose.model('Banner',bannerSchema);