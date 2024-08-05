const { Router } = require("express")
const { obtenerId } = require("../controllers/controllers")

const router = Router();

router.get("/tasks/:id", obtenerId)


module.exports = router