const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const DB_URL = "mongodb://localhost:27017/userdb";

// middleware passing

app.use(express.json());

// DB connection
mongoose
  .connect(DB_URL)
  .then(() => console.log("Db is connected"))
  .catch((err) => console.log("error found", err));

//Define schema
const useSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  age: { type: Number, required: true },
  email: { type: "string", required: true },
  phone:{type:Number,required:false},
  place:{type:String,required:true}
});

// Model creation
const User = mongoose.model("user", useSchema, "userdetails");

//CRUD

//CREATE
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const insertData = await user.save();
    res.status(200).json({
      message: "User created",
      insertedData: insertData,
    });
  } catch {
    res.status(404).json({
      message: "User not created",
    });
  }
});
// create route

app.get("/", (req, res) => {
  res.send("API is working");
});

// start server

app.listen(PORT, () => {
  console.log("Server is running");
});
