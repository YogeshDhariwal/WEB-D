// const express =require('express')
// const router =express.Router();

//middelware that is specific to this router
// router.use((req ,res,next)=>{

//     console.log('time:',Data.now());
//     next()
// })

// define the home page route
// router.get('/',(req,res)=>{
//     res.send("blog home page")
// })

// // define the about route
// router.get('/aboutblog',(req,res)=>{
//     res.send("about blog")
// })
 
// router.get('/blogpost/:slug',(req,res)=>{
//     res.send(`hello  fetch the blogpost for ${req.params.slug}`)
// })
// module.exports=router;

const express =require("express")
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("hello world from router // blog home page ")
})

router.get('/blog',(req,res)=>{
    res.send("hello this is  a blog")
})

router.get('/blog/:slug',(req,res)=>{
    res.send(`hello this blog is about ${slug}`)
})

module.exports=router;