const db=require("../routes/db-config");
const bcrypt=require("bcryptjs");


const register=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    db.query("SELECT * FROM usuarios WHERE email=?",[email],
    (err,result)=>{
        if(err) throw err;
        if(result.length==0){
            bcrypt.hash(password,10,(err,hash)=>{
                db.query("INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)",
                [name,email,hash],
                (error,result)=>{
                    if(error) throw error;
                    return res.json({status:"sucess",sucess:"usuario registrado"});
    
                });

            } );
           
        }else{
            return res.json({status:"error",error:"Email ja cadastrado"})
        }
    });}

module.exports=register;