const http=require('http');
const express=require('express');
const bp=require('body-parser');
const adminroutes=require('./routes/admin')
const fixer=require('./routes/shop')
const path= require('path');
const rootdir=require('../utills/path')
const app=express();
app.use(express.static(path.join(__dirname,'public')))

app.use(bp.json())
app.use(bp.urlencoded({extended:true}));
app.use(adminroutes);
app.use(fixer);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','orr.html'))
})

app.listen(3000)


