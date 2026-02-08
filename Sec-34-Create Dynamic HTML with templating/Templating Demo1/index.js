const express= require("express");
const app=express();
const path=require("path");
const port=3000;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
    //when home.ejs is inside views folder which is inside current working directory or where index.js is present
});
app.listen(port,()=>{
    console.log(`listening on port ${port}.`);
});