const express = require("express");
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 4000;

app.use(express.json())
const users = [
  { id: "1", name: "safuvan", email: "safuvan@gmail.com", password: "123456" },
  {
    id: "2",
    name: "thabsheer",
    email: "thabsheer@gmail.com",
    password: "456789",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post('/login',(req,res)=>{
    const {email, password} = req.body;
    const user = users.find((user)=> user.email === email && user.password === password)
    if(!user){
        return res.status(401).json({message: "invalid email or password"})
    }
    const token = jwt.sign({id:users.id},'topsecret')
    res.send({message:'login successfully',token})
})

app.get("/profile", (req, res) => {
    if(!req.headers.authorization){
        res.status(401).json({message:"not found the token"})
    }
    console.log(users)

    console.log("got payload",token)
  res.send("profile");
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
