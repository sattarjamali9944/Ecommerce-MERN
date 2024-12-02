const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const catSchema = new Schema({
	cat_name:{
        type:String,
        required:true,
      },
   image:{
        type:String,
        
      },
    
    status:{
        type:String,
        
    },
   
}, { timestamps: true });

module.exports =mongoose.model('categories',catSchema);

