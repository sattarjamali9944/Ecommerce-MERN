const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	full_name:{
        type:String,
        required:true,
      },
    phone:{
        type:String,
        required:true,
      },
       mobile:{
        type:String,
        },
      gender:{
        type:String,
       },
      email:{
        type:String,
        required:true,
      },
      password:{
        type:String,
        required:true,
      },
      image:{
        type:String,
        required:true,
      },
      opt:{
        type:String,
       },
       role:{
        type:String,
        default:'user'
       },
       cart:{
        type:Array,
        defalult:[],
       },
       address:
       {
        type:String,
       },
        countryId:{type:Schema.Types.ObjectId,ref:'countries'},

	   website:
       {
        type:String,
       },
	   
	   
	   github:
       {
        type:String,
       },
	   twitter:
       {
        type:String,
       },
	   instagram:
       {
        type:String,
       },
	   facebook:
       {
        type:String,
       },
       whishlist:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}],

    status:{
        type:String,
        
    },
   
}, { timestamps: true });

module.exports =mongoose.model('users',userSchema);