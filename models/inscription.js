const mongoose=require("mongoose");
const schema=mongoose.Schema;
const inscriptionSchema = new schema({
    
    nameparent:String,
    namefils:String,
    club:String,
    img:String,
    date:{type:String},
    paiment:{type:String},
  });
  const Inscription = mongoose.model('Inscription', inscriptionSchema);
module.exports=Inscription;