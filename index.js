const express = require("express");
const app = express();

app.use(allbooks);

app.get("/books",(req,res)=>{
    res.send({req:req.path});
});

app.get("/books/:name",singleBooks,(req,res)=>{

    req.name=req.params.name
  
    res.send({bookName:req.name});
});

function singleBooks(req,res,next){
    next();
}


function allbooks(req,res,next){
    console.log("Fetching all books");
    next();
}

app.listen(4500,(req,res)=>{
    console.log("listing on 4500")
});