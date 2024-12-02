const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countrySchema = new Schema({
	country_name:{
        type:String,
        
      },
    
    
   
}, { timestamps: true });

module.exports =mongoose.model('Country',countrySchema);
