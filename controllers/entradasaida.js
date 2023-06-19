const db=require("../routes/db-config");

 const atualizarprod=(req, res)=>{
    const id = req.body.id;
    const qtd= req.body.qtd;

        db.query(`UPDATE produtos SET quantidade = '${qtd}' WHERE id ='${id}'`, (err, results) => {
            if (err) throw err;
            return res.json(results);
            })
 }

module.exports=atualizarprod;