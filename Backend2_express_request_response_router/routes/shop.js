const express =require('express')
const router =express.Router();


// define the home page route
router.get('/',(req,res)=>{
    res.send("shop home page")
})

// define the about route
router.get('/aboutshop',(req,res)=>{
    res.send("about shop")
})
 
router.get('/shop/:slug',(req,res)=>{
    res.send(`hello  fetch the shop product for ${req.params.slug}`)
})
module.exports=router;