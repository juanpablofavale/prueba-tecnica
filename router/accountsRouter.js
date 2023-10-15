import { Router } from "express";

const accountsRouter = Router()

// implementar crud completo

accountsRouter.get("/", (req, res, next) => {
    res.status(200).json({
        response: "Bienvenido a la API desde /accounts",
        error: false,
        success: true
    })
})

export default accountsRouter