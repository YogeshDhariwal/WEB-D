const express=require("express")
const app=express()
const port=3000;
                             /**folder name */
 app.arguments(express.static('public')); // if we want to use a file as public file then  use this

// app.get or app.post or app.put or app.delete(path,handler)
app.get("/",(req,res)=>{
  res.send("hello world252")
})

app.get("/about",(req,res)=>{
  res.send(" about us mittar")
})
 
app.get("/contact",(req,res)=>{
  res.send("hello contact")
})
/** we know that there always be not sure about only 1 blog when we want to use more than one blog then the code is not maintainable and cannot used as appropriate approach */
/** here comes the concept of using express */
app.get("/blog",(req,res)=>{
  res.send("hello blog!")
  
})
 
// for url =http://127.0.0.1:3000/blog/into%20to%20s?mode=dark&region=in
app.get("/blog/:slug",(req,res)=>{

  console.log(req.params);  // output is {slug: 'intro to s'}
  console.log(req.query);   // output is {mode:'dark' ,region:'in"}
  res.send(`hello ${req.params.slug}`);
})

// app.get("/blog/intro-to-js",(req,res)=>{
//   res.send("hello blog intro-to-js!")
// })

// app.get("/blog/intro-to-python",(req,res)=>{
//   res.send("hello blog intro-to-python!")
// })
app.listen(port,( )=>{
  console.log(`example app is listening on port ${port}`);
})