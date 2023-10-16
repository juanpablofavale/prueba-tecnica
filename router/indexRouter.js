import { Router } from 'express';
import accountsRouter from './accountsRouter.js';

const indexRouter = Router()

indexRouter.get('/', (req, res, next) => {
    res.status(200).json({
        response: 'Bienvenido a la API desde /api',
        error: false,
        success: true
    })
})

indexRouter.use('/accounts', accountsRouter)

export default indexRouter