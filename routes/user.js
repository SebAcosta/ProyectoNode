const express = require('express');
const jwt = require('jsonwebtoken')
const user = express.Router();
const db = require('../config/database')

user.post("/login",async(req,res,next)=>{
    const {correo, pass} = req.body
    const query = `SELECT * FROM administradores WHERE email = '${correo}' AND password = '${pass}';`
    
    const rows = await db.query(query)

    if(correo&&pass){
        if(rows.length == 1){
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            }, "node")
            return res.status(200).json({code:200,message:token})
        }else{
            return res.status(200).json({code:401,message:"Usuario y/o contraseña incorrectos"})
        }
    }
    return res.status(500).json({code:500, message:"Campos incompletos"})


})

user.get("/",async(req,res,next)=>{
    const query = "SELECT * FROM administradores";
    const rows = await db.query(query);

    return res.status(200).json({code:200, message:rows})
})

module.exports = user