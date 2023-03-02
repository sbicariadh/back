const mongoose = require ('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://sbica:mNKgXX47PpwWF6Fp@cluster0.5psipxh.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected to Data Base')
    }catch(err){
        console.log (err)

    }
}
module.exports = connectDB