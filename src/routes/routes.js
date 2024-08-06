const { Router } = require("express")
const { obtenerId, obtenerTodo, nuevaTask, editarTask, eliminarTask } = require("../controllers/controllers")

const router = Router();

router.get("/tasks/:id", obtenerId)
router.get("/tasks", obtenerTodo)
router.post("/tasks", nuevaTask)
router.put("/tasks/:id", editarTask)
router.delete("/tasks/:id", eliminarTask)


module.exports = router