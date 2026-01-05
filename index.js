const express = require('express')

const app = express();


app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(4000,(req,res)=>{
    console.log('Server running on port 3000')
})