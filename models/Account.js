import { Schema, model } from "mongoose";

const collection = 'accounts'

const schema = new Schema({
    fullName:{type:String, required:true},
    numberClient:{type:String, required:true},
    imageProfile: {type:String, required:true},
    balance:{type:Number, default:0},
    payments:[{
        fecha:{type:Date},
        payments: {type:Number}
    }]
})

const Account = model(collection, schema)

export default Account