const joi = require('joi')

const createUserSchema = joi.object({
    name: joi.string().min(5).required(),
    email: joi.string().email().required()
})

const updateUserSchema = joi.object({
    email: joi.string().email().required()
})

const validateUserInfo = (schemaType) => (req, res, next) => {
    const schema = schemaType === 'create' ? createUserSchema : updateUserSchema
    try{
        const {error} = schema.validate(req.body)
        if (error) res.json({status: 'failed', message: error.details[0].message})
        else next()
    }catch(err){
        res.json({status: 'failed', message: err.message})
    }
    
}

module.exports = validateUserInfo