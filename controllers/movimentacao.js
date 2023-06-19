const db=require("../routes/db-config");

const register=(req,res)=>{
    const produto=req.body.produto;
    const precounit=req.body.precoU;
    const precoTotal=req.body.precoT;
    const qtd=req.body.qtd;
    const modo=req.body.modo;
   

    db.query("INSERT INTO movimentacao(produto,precounitario,precoTotal,quantidade,modo) VALUES(?,?,?,?,?)",
    [produto,precounit,precoTotal,qtd,modo],
    (error,result)=>{
        if(error) throw error;
        return res.json(result)})
    }
module.exports=register;