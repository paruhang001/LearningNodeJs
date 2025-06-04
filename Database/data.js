//database connection code
const {Sequelize,DataTypes}= require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize({
    database: process.env.database_name,
    username:process.env.database_username,
    password: process.env.database_password,
    port: process.env.database_port,
    host:process.env.database_host,
    dialect : "mysql"

})
sequelize.authenticate()
.then(()=>{
    console.log("connection successfully")
})
.catch((err)=>{
    console.log("error occured")
})

const db={}
require("./../modles/blogModel")(sequelize,DataTypes)
require("./../modles/product")(sequelize,DataTypes)

//this help to migrated the data change 
sequelize.sync({after:false}).then(()=>{
    console.log("migrated successfully")
})
module.exports = sequelize