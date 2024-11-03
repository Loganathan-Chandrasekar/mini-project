const express = require("express");
const path= require('path');
const router=express.Router();
const rootdir=require('../utills/path')

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'));
})
//app.use('/store-product',(req,res)
router.post('/store-product',(req,res)=>{
    console.log('Form data:',req.body);
    res.send('<b>Submitted succesfully!</b>')
})
module.exports=router;