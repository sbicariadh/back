const express = require('express')
const produitRouter =express.Router()
const {posting,getAllproduits,produitdelete}=require('../controller/produitcontroller')



produitRouter.get('/allproduits',getAllproduits)
produitRouter.post('/ajoutproduit',posting)
produitRouter.delete('/deleteproduit/:id',produitdelete)



module.exports =produitRouter