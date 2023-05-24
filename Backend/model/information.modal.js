const mongoose = require("mongoose");
const schema = mongoose.Schema;

//create schema
const Information_schema = new schema({
  first_Name: { type: String, required:true},
  last_Name: { type: String, required: true},
  address: { type: String, required: true},
  contact_no: { type: Number, required: true},
  informer_Name: { type: String, required: true},
  description:{type:String, required: true}
});

const information=mongoose.model('information',Information_schema);

module.exports=information;