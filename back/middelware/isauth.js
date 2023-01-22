var jwt = require ('jsonwebtoken');
const userSchema = require ('../model/usermodel')




exports.Isauth = async(req,res,next)=>{

    try{ token = req.header('authorized')

    var decoder = jwt.verify(token,process.env.privateKey)

    if(!decoder){return res.status(400).send({msg:'not welcome'})}

    const user = await userSchema.findById(decoder.id) 
    req.user = user
    next()


    }catch(err){
        res.status(500).send({msg:'ddnt auth part'})
    }



}