const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("index");
})

router.get("/register",(req,res)=>{
    res.sendFile("register.html",{root:"./public"});
})

router.get("/login",(req,res)=>{
    res.sendFile("login.html",{root:"./public/"});
})
router.get("/produtos",(req,res)=>{
    res.sendFile("produtos.html",{root:"./public"});
})
router.get("/movimentacao",(req,res)=>{
     res.sendFile("movimentacao.html",{root:"./public/"});
 })
 router.get("/produtolista",(req,res)=>{
    res.sendFile("produtolista.html",{root:"./public/"});
})
router.get("/movimentacao",(req,res)=>{
    res.sendFile("movimentacao.html",{root:"./public/"});
})
router.get("/entradasaida",(req,res)=>{
    res.sendFile("entradasaida.html",{root:"./public/"});
})
module.exports=router;
