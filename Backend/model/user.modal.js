const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create schema
const userSchema = new schema({
  profile_name: { type: String, required: true,min:3,max:20},
  email_id:{ type:String, required: true,unique:true},
  contact_no: { type: Number, required: true,unique:true},
  position: { type: String,required:true},
  password:{ type: String,required:true},

});

const Users=mongoose.model('Users',userSchema);
module.exports=Users;
