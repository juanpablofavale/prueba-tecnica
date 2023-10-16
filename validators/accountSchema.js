import joi from 'joi'

const accountSchema = joi.object({
    fullName: joi.string().required(),
    numberClient: joi.string().required(),
    imageProfile: joi.string().required(),
    balance: joi.number().default(0),
})

export default accountSchema