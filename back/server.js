const express = require ('express')
const cors =require ('cors')
const connectDB = require('./config/connectdb')
const produitRouter=require('./Route/routeproduit')
const userRouter=require ('./Route/routeuser')
const app =express ()
const port = 5001
app.use(express.json())
connectDB()
require('dotenv').config()

app.use(cors())
app.use('/user',userRouter)
app.use('/produit',produitRouter)
app.listen(port,err=>{
    err?console.log(err):console.log(`you are connect to port ${port}`)
})