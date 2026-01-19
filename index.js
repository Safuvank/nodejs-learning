const express = require("express");

const app = express();

const userRouter = require('./routers/users.router')

const PORT = 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

app.use('/users',userRouter)


app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
