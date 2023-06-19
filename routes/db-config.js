
const dotenv=require("dotenv").config();
const mysql=require("mysql");

const db=mysql.createConnection({
    host:process.env.DABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})
// host:"localhost",
//user:"root",
//password:"l1u2a3n4",
//database:"sistema_estoque"

module.exports=db;


