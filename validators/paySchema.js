import joi from 'joi'

const paySchema = joi.object({
    date: joi.string().required(),
    pay: joi.number().required()
})

export default paySchema