const express=require("express");
const router=express.Router();
const register=require("./register")
const login=require("./login")
const produtos=require("./produtos")
const entrada=require("./entradasaida")
const movimentacao=require("./movimentacao")
const lista=require("./lista")
const movimentacaolista=require("./movimentacaolista")


router.post("/register",register)
router.post("/login",login)
router.post("/produtos",produtos)
router.post("/historico",movimentacao)
router.get("/listaproduto",lista)
router.put('/entrada/:id', entrada)
router.get("/historicoprod",movimentacaolista)

module.exports=router;
