//const sequelize = require("../Database/data");

const makeProductTables=(sequelize,Datatypes)=>{
    const product=sequelize.define("product",{
name:{
    type:Datatypes.STRING

},
description:{
    type: Datatypes.STRING
},
price: {
    type: Datatypes.INTEGER
},
quantity:{
    type: Datatypes.INTEGER
}
})
return product
}

module.exports=makeProductTables
