const express = require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')
const app = express()
const port = 3000
// to use post request on server  
app.use(express.static("public"));
app.use('/blog',blog);  // using routes blog
app.use('/shop',shop);   // using shop routes

app.get('/', (req, res) => {
  console.log("i am a GET request");
  res.send('Hello World2!')
})

app.put('/', (req, res) => {
  console.log("i am a put request");
  res.send('Hello World i am a put request')
})
 
app.delete('/', (req, res) => {
  console.log("i am a delete request");
  res.send('Hello World2! i am delete request')
})

app.post('/',(req,res)=>{

  console.log("i am a post request");
  res.send("hello world its a post request")
})

/** using sendfile because we want to use the html page data insted of output on the console  */
app.get('/index',(req,res)=>{

  console.log("i am index file");
  res.sendFile("template/index.html",{root :__dirname})
})

/** using of res.json when we want to create an api  */

app.get('/api',(req,res)=>{

  console.log("i am a json");
  res.json({"a":1,"b":2,"c":3});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// CHAINING OF REQUEST REMOVE ALL THE APP AND COLLECT ALL THE REQUESTS WITH . THAT IS CALLED CHAINING OF REQUESTS