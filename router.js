const express = require('express')
const route = express.Router();
const controller = require("./controller")

route.get("/listUser",controller.listUser)
route.post("/createUser",controller.createUser)
route.put("/updateUser",controller.updateUser)
route.delete("/deleteUser/:id",controller.deleteUser)

module.exports = route