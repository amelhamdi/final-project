const mongoose=require("mongoose");
const schema=mongoose.Schema;
const serviceSchema = new schema({
    
    name:String,
    cathegorie:String,
    description:String,
    image:String,
    prix:String,
  });
  const Service = mongoose.model('Service', serviceSchema);
module.exports=Service;
