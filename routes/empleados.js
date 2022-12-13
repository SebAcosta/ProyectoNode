const express = require('express');
const empleado = express.Router();
const db = require('../config/database')

empleado.post("/", async(req,res,next)=>{
    const { nombres,apellidos,telefono,correo,direccion } = req.body
    if(nombres&&apellidos&&telefono&&correo&&direccion){
        let query = "INSERT INTO empleados (nombre, apellidos, telefono, correo, direccion)";
        query += ` VALUES('${nombres}','${apellidos}','${telefono}','${correo}','${direccion}')`;

        const rows = await db.query(query)

        if(rows.affectedRows == 1){
			return res.status(201).json({code:201,message:"Empleado registrado correctamente"})
		}
		return res.status(500).json({code:500,message:"Ocurrió un error"})
	}
	return res.status(500).json({code:500,nessage:"Campos incompletos"})
})

empleado.delete("/:id([0-9]{1,3})",async(req,res,next)=>{
    const query = `DELETE FROM empleados where id = ${req.params.id}`
    const rows = await db.query(query)
    if(rows.affectedRows == 1){
        return res.status(200).json({code:200, message:"Empleado borrado"})
    }
    return res.status(404).json({code:404,message:"Empleado no encontrado"})
})

empleado.put("/:id([0-9]{1,3})", async(req,res,next)=>{
    const { nombres,apellidos,telefono,correo,direccion } = req.body
    if(nombres&&apellidos&&telefono&&correo&&direccion){
        let query = `UPDATE empleados SET nombre='${nombres}', apellidos='${apellidos}'`;
        query += `, telefono='${telefono}', correo='${correo}', direccion='${direccion}' WHERE id=${req.params.id}`;

        const rows = await db.query(query)

        if(rows.affectedRows == 1){
			return res.status(201).json({code:201,message:"Empleado registrado correctamente"})
		}
		return res.status(500).json({code:500,message:"Ocurrió un error"})
	}
	return res.status(500).json({code:500,nessage:"Campos incompletos"})
})

empleado.get("/", async (req,res,next)=>{
    const emp = await db.query("SELECT * FROM empleados");
    return res.status(200).json({code:200, message:emp})
})

empleado.get("/:id([0-9]{1,3})", async(req,res,next)=>{
    const id = req.params.id
    const emp = await db.query(`SELECT * FROM empleados WHERE id = '${id}'`)
    if(emp.length>0){
        return res.status(200).json({code:200,message:emp})
    }
    return res.status(404).send({code:404,message:"Empleado no encontrado"})
})

empleado.get("/:nombre([A-Za-z]+)", async(req,res,next)=>{
    const nombre = req.params.nombre
    const emp = await db.query(`SELECT * FROM empleados WHERE nombre LIKE '%${nombre}%'`)
    if(emp.length>0){
        return res.status(200).json({code:200,message:emp})
    }else{
        const emp2 = await db.query(`SELECT * FROM empleados WHERE apellidos LIKE '%${nombre}%'`)
        if(emp2.length>0){
            return res.status(200).json({code:200,message:emp2})
        }
    }
    return res.status(404).send({code:404,message:"Empleado no encontrado"})
})

module.exports = empleado;