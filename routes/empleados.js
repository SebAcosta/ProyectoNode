const express = require('express');
const empleado = express.Router();
const db = require('../config/database')

empleado.get("/", async (req,res,next)=>{
    const emp = await db.query("SELECT * FROM empleados");
    return res.status(200).json({code:200, message:emp})
})

module.exports = empleado;