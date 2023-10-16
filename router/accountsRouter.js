import { Router } from "express";
import accountController from "../controller/accountController.js";
const { getAll, getOne, postOne, putOne, deleteOne } = accountController
const accountsRouter = Router()

accountsRouter.get("/", getAll)
accountsRouter.get('/:_id', getOne)
accountsRouter.post('/', postOne)
accountsRouter.put('/:_id', putOne)
accountsRouter.delete('/:_id', deleteOne)

export default accountsRouter