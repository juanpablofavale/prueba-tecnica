import Account from '../models/Account.js';

const initRes = () => {
    return {
        response:[],
        success:true,
        error:false
    }
}

const accountController = {
    getAll: async (req, res, next) => {
        const genRes = initRes()
        try {
            const response = await Account.find()
            genRes.response = response
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    getOne: async (req, res, next) => {
        const genRes = initRes()
        try {
            const id = req.params._id
            const response = await Account.findById(id)
            genRes.response = response
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    postOne: async (req, res, next) => {
        const genRes = initRes()
        try {
            const response = await Account.create(req.body)
            genRes.response = response
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    putOne: async (req, res, next) => {
        const genRes = initRes()
        try {
            const id = req.params._id
            const response = await Account.findByIdAndUpdate(id, req.body, {new:true})
            genRes.response = response
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    putPay: async (req, res, next) => {
        const genRes = initRes()
        try {
            const id = req.params._id
            const pay = req.body
            const aux = await Account.findById(id)
            const response = await Account.findByIdAndUpdate(id, {$set: {balance:aux.balance-pay.pay}, $push: {payments: pay}}, {new:true})
            genRes.response = response
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
    deleteOne: async (req, res, next) => {
        const genRes = initRes()
        try {
            const id = req.params._id
            const response = await Account.findByIdAndDelete(id)
            genRes.response = response
            res.status(200).json(genRes)
        } catch (err) {
            next(err)
        }
    },
}

export default accountController