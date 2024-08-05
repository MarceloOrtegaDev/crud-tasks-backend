const mysql2 = require("mysql2/promise")

const newConnection = async () => {
    const conection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "tasks_db"      
    })
    
    return conection

}

module.exports = {
    newConnection
}