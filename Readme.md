Prueba Técnica NodeJS

Crud para prueba técnica con Node JS, Express JS, Mongo, Mongoose y validación con Joi

Petición get        a '/api/accounts/' <br>
para obtener todas las cuentas

Petición get        a '/api/accounts/:_id' <br>
para obtener una cuenta segun id

Petición post       a '/api/accounts/' <br>
para crear una cuenta
requiere objeto cuenta en el cuerpo de la petición con el siguiente modelo: <br>
{ <br>
    fullName: {type:String, required:true}, <br>
    numberClient: {type:String, required:true}, <br>
    imageProfile: {type:String, required:true}, <br>
    balance: {type:Number, default:0}, <br>
} <br>

Petición put        a '/api/accounts/:_id' <br>
para modificar una cuenta <br>
requiere objeto cuenta en el cuerpo de la petición con el siguiente modelo: <br>
{ <br>
    fullName: {type:String, required:true}, <br>
    numberClient: {type:String, required:true}, <br>
    imageProfile: {type:String, required:true}, <br>
    balance: {type:Number, default:0}, <br>
} <br>

Petición put        a '/api/accounts/payments/:_id' <br>
para agregar un pago <br>
requiere objeto con el siguiente modelo: <br>
{ <br>
    date: joi.string().required(), <br>
    pay: joi.number().required() <br>
} <br>

Petición delete     a '/api/accounts/:_id' <br>
para eliminar una cuenta
