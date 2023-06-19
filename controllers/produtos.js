const db=require("../routes/db-config");

const produtos=(req,res)=>{
    const name=req.body.name;
    const price=req.body.price;
    const qtd=req.body.qtd;
    db.query("SELECT * FROM produtos WHERE nome_produto=?",[name],
    (err,result)=>{
        if(err) throw err;
        if(result.length==0){
                db.query("INSERT INTO produtos(nome_produto,quantidade,valor) VALUES(?,?,?)",
                [name,qtd,price],
                (error,result)=>{
                    if(error) throw error;
                    return res.json({status:"sucess",sucess:"Produto cadastrado"});
    
                });

          
           
        }else{
            return res.json({status:"error",error:"Produto ja cadastrado"})
        }
    });}

module.exports=produtos;