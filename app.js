const express = require("express");
const app = express();

app.get(["/","/home","/menu"], (req, res) => {
  res.send("Hello World from expresss");
});

app.get('/query',(req,res)=>{
    res.send(req.query)
})

app.get("/async", async (req, res) => {
  const data = await Promise.resolve("Hello async");
  res.send(data);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});

app.listen(5000, () => {
  console.log("Server is running on 5000 port");
});
