const express = require('express');
const router = express.Router();
const home = require( '../models/homeModel');

router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
});

router.get('/',(req,res)=>{
    res.json(home.getNews())
});

module.exports = router;
