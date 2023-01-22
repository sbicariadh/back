const { body, validationResult } = require('express-validator')
exports.registervalidator =[

    body('email','put your email').isEmail(),
    body('password',' min length 8 ,min 1 lowercase,min 1 uppercase , min 1 symbol ').isLength({min:6})
    
    ]
    exports.validation = async(req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next()
    }