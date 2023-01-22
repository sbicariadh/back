const userSchema = require('../model/usermodel')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')


exports.register=async(req,res)=>{

    try{
    const {name,email,password,role} = req.body 
    let body= req.body
    
    // lahna chofna esq 3ndna deja l email hedha fl DB mta3na wella
    const found =await userSchema.findOne({email})
    if(found){res.status(400).send({msg:'vous aver deja un compt avec ce mail'})}
    
    
    // tawa bch na3mlou lhash mta3 lpassword 9bal manasn3ou lcompt mta3na
    const newuser = await new userSchema(body)
    // hna bedhabt bdet 5edmet lhashaj
    const saltRounds = 10 ; 
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt);
    newuser.password = hash
    
    
    // tawa bch na3mlou token mta3na
    const payload = {id : newuser._id}
    var token = jwt.sign(payload,process.env.privateKey)
    
    // hna save mta3 donne mta3na bl hashaj bl token 
    newuser.save()
    
    res.status(200).send({msg:'added with success',newuser,token})
    
    
    }catch(err){
    
        console.log(err)
        res.status(500).send({msg:'register failed'}) 
    }
    }
    exports.login=async(req,res)=>{
        try{
         const {email,password} = req.body
     
     // lahna chofna esq 3ndna deja l email hedha fl DB mta3na wella si oui ya3ml login si nn bch yotlb 3lik register
     const user =await userSchema.findOne({email})
     if(!user){res.status(400).send({msg:'you have to register first'})}
     
     //tw bch nchoufou l password mta3na s7i7 wella
     const match = await bcrypt.compare(password,user.password)
     if(!match){res.status(400).send({msg:"wrong password"})}
     
     
     const payload = {id : user._id}
     var token = jwt.sign(payload,process.env.privateKey)
     res.status(200).send({msg:'welcom',token,user})
        }catch(err){
         res.status(500).send({msg:err.message})
        }
     }
     exports.getAllUsers=async(req,res)=>{
        try{
            const users = await userSchema.find()
            res.status(200).send({msg:'all users',users})
    
        }catch(err){
    
            res.status(400).send({msg:'cannot get users,there is a probleme'})
        }
    }
    

    
    exports.addAdmin=async(req,res)=>{

        try{
        const {email,password} = req.body 
        let body= req.body
    
        body["role"]= "admin"
        // lahna chofna esq 3ndna deja l email hedha fl DB mta3na wella
        const found =await userSchema.findOne({email})
        if(found){res.status(400).send({msg:'you have an account with this mail'})}
    
    
        // tawa bch na3mlou lhash mta3 lpassword 9bal manasn3ou lcompt mta3na
        const newuseradmin = await new userSchema(body)
        // hna bedhabt bdet 5edmet lhashaj
        const saltRounds = 10 ; 
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt);
        newuseradmin.password = hash
    
    
        // tawa bch na3mlou token mta3na
        const payload = {id : newuseradmin._id}
        var token = jwt.sign(payload,process.env.privateKey)
    
        // hna save mta3 donne mta3na bl hashaj bl token 
        newuseradmin.save()
    
        res.status(200).send({msg:'added with success',newuseradmin,token})
    
    
        }catch(err){
    
            console.log(err)
            res.status(500).send({msg:'register failed'}) 
        }
        }
       exports.userdelete = async(req,res)=>{

            try{
                const {id} = req.params
                const deleteuser = await userSchema.findByIdAndDelete(id)
                res.status(200).json({msg:"c bn "})
        
        
            }catch(err){
                res.status(500).json("matfasa5 chy ")
            }
        
        }
       