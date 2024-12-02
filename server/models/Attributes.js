const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const attributeSchema = new Schema({
	attribute_name:{
        type:String,
        required:true,
      },
      image:{
        type:String,
      },
      userId:{type:Schema.Types.ObjectId,ref:'users'},
    status:{
        type:String,
        
    },
   
}, { timestamps: true });

module.exports =mongoose.model('attribute',attributeSchema);

