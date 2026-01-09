import express from "express";

const app = express();

const PORT = 3000;

//we can include multiple folders in this bottom like public and imagaes that are folder names and include route lik '/public' in this time in browser localhost//:3000/public/example.txt and get imagest like kk.jpg
// create a public folder and inside a file like example.txt or image.jpg
app.use('/public',express.static('public'))
app.use(express.static('images'))

app.get('/',(req,res)=>{
   res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`The Server is running on port:${PORT}`);
});
