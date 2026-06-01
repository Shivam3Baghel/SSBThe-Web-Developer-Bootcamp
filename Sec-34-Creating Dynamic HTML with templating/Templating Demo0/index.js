const express= require("express");
const app=express();
const path=require("path");
const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))//searches for ejs file in described path
app.get("/",(req,res)=>{
    res.render("home.ejs");
    //when home.ejs is inside views folder which is inside the path path.join(__dirname,"views")
});
app.listen(port,()=>{
    console.log(`listening on port ${port}.`);
});