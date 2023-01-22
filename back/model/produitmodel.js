const mongoose = require('mongoose')

const produitSchema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    image:String,
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'admin'
    }
        

})
module.exports=mongoose.model('produit',produitSchema)