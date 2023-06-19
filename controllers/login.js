
const db=require("../routes/db-config");
const bcrypt=require("bcryptjs")


const login=async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.query("SELECT * FROM usuarios WHERE email=?",[email],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            bcrypt.compare(password,result[0].senha,(err,result)=>{
               if(result){
                return res.json({status:"sucess",sucess:"usuario logado"});
               }else{
                return res.json({status:"error", error:"email ou senha incorretos"})
               }
               
            });
           
        }else{
            return res.json({status:"error", error:"entre com o email e a senha"});
        }
    });

}


   


module.exports=login;