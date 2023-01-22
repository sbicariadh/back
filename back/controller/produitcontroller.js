const produitSchema = require('../model/produitmodel')


     exports.getAllproduits=async(req,res)=>{
        try{
            const produits = await produitSchema.find()
            res.status(200).send({msg:'all produits',produits})
    
        }catch(err){
    
            res.status(400).send({msg:'cannot get users,there is a probleme'})
        }
    }
    

       exports.produitdelete = async(req,res)=>{

            try{
                const {id} = req.params
                const deleteproduit = await produitSchema.findByIdAndDelete(id)
                res.status(200).json({msg:"c bn produit tar "})
        
        
            }catch(err){
                res.status(500).json("matfasa5 chy min produit ")
            }
        
        }
        exports.posting = async(req,res)=>{
            try{
                let body= req.body
               
                const newproduit = await new produitSchema(body)
                newproduit.save()
                res.status(200).send({msg:'produit ajouter',newproduit})
        
            }catch(err){
                console.log(err)
                res.status(500).send({error:err.message})
        
            }
        }