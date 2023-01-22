const express = require('express')
const userRouter =express.Router()
const {validation,registervalidator} = require ('../middelware/Validation')
const {Isauth} = require ('../middelware/isauth')

const {register,login,getAllUsers,addAdmin,userdelete}=require('../controller/usercontroller')

userRouter.get('/getuser',getAllUsers)
userRouter.post('/register',registervalidator,register,)
userRouter.post('/login',login)
userRouter.post('/admin',addAdmin)
userRouter.delete('/deleteuser/:id',userdelete)




module.exports =userRouter


