const express =require("express")
const app=express();

const port=3000;
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    let siteName="Adidas";
    let searchText="Search Now"
    res.render("index",{siteName : siteName,searchText:searchText})
})

app.get('/blog/:slug',(req,res)=>{
    let blogtitle="about adidas and nike rivelry"
    let blogcontent="it is good for market"
    res.render("index",{blogtitle:blogtitle,blogcontent:blogcontent})
})
app.listen(port,()=>{
    console.log(`Example app is listening at port ${port}`);
})