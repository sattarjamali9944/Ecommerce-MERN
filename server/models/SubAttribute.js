const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SubAttributeSchema = new Schema({
	sub_attribute_name:{
        type:String,
        required:true,
      },
      attributeId:{type:Schema.Types.ObjectId,ref:'attributes'},
  
    
   
}, { timestamps: true });

module.exports =mongoose.model('SubAttribute',SubAttributeSchema);

