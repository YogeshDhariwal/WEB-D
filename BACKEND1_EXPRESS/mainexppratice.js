const express=require("require")
const app=express;
const port=3000;
 
// middleware
//app.use(express.static("public"))
app.get('/',(req,res)=>{

    console.log('hello world this is get request');
    res.send("hello world from the get request");
})

app.get('/blog',(req,res)=>{

    res.send("hello i the first blog of Black Hole:The Ultimate Dimension")
})

// we can crreate a variable if we want to create different blogs 
app.get('/blog/:slug',(req,res)=>{

    res.send(`hello this blog is about ${slug}`)
})
app.listen(port,()=>{
    console.log(`the given example is running at port ${port}`);
})