
const {newConnection} = require("../db/dataBase")

async function obtenerId(req, res){
    const conexion = await newConnection()
    const id = parseInt(req.params.id)
    const result = await conexion.query("SELECT * FROM tasks WHERE id = ?", [id])
    
    if(!result){
        res.json({msg: "No se encuentra este Id"})
    } else {
        res.json(result[0])
    }
    conexion.end()
}



module.exports = {
    obtenerId
}