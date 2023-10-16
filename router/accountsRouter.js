import { Router } from 'express';
import accountController from '../controller/accountController.js';
import validator from '../middlewares/validator.js'
import accountSchema from '../validators/accountSchema.js'
import paySchema from '../validators/paySchema.js';
const { getAll, getOne, postOne, putOne, putPay, deleteOne } = accountController
const accountsRouter = Router()

accountsRouter.get('/', getAll)
accountsRouter.get('/:_id', getOne)
accountsRouter.post('/', validator(accountSchema) , postOne)
accountsRouter.put('/:_id', validator(accountSchema) , putOne)
accountsRouter.put('/payments/:_id', validator(paySchema) , putPay)
accountsRouter.delete('/:_id', deleteOne)

export default accountsRouter