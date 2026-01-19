const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} = require("../controllers/users.controller");
const route = express.Router();


route.get("/", getUsers);

route.get("/:id", getUser);

route.post("/", createUser);

route.delete("/:id", deleteUser);

module.exports = route;
