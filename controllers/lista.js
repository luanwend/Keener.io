
const db=require("../routes/db-config");

const listar=async(req,res)=>{

    db.query('SELECT * FROM produtos', (err, results) => {
    if (err) throw err;
    return res.json(results);
    })}


   


 module.exports=listar;