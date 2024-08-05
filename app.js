const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan());
app.use(require("./src/routes/routes"))



//puerto
app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000")
})


