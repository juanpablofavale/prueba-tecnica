Prueba Técnica NodeJS

Crud para prueba técnica con Node JS, Express JS, Mongo, Mongoose y validacion con Joi

Petición get        a '/api/accounts/'
para obtener todas las cuentas

Petición get        a '/api/accounts/:_id'
para obtener una cuenta segun id

Petición post       a '/api/accounts/'
para crear una cuenta
requiere objeto cuenta en el cuerpo de la peticion con el siguiente modelo:
{
    fullName: {type:String, required:true},
    numberClient: {type:String, required:true},
    imageProfile: {type:String, required:true},
    balance: {type:Number, default:0},
}

Petición put        a '/api/accounts/:_id'
para modificar una cuenta
requiere objeto cuenta en el cuerpo de la peticion con el siguiente modelo:
{
    fullName: {type:String, required:true},
    numberClient: {type:String, required:true},
    imageProfile: {type:String, required:true},
    balance: {type:Number, default:0},
}

Petición put        a '/api/accounts/payments/:_id'
para agregar un pago
requiere objeto con el siguiente modelo:
{
    date: joi.string().required(),
    pay: joi.number().required()
}

Petición delete     a '/api/accounts/:_id'
para eliminar una cuenta