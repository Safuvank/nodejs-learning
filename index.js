import express from "express";
import router from "./route.js";

const app = express();

const PORT = 3000;

app.use("/user", router);

app.post("/users",express.json(), (req, res) => {
  const { name, email } = req.body;
  res.send(`User ${name} with email ${email} created succefully`);
});

app.listen(PORT, () => {
  console.log(`The Server is running on port:${PORT}`);
});
