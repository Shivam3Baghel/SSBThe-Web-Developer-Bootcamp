const express=require("express");
const app=express();
const port=3000;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
res.render("home.ejs");
});
app.get("/cats",(req,res)=>{
    const cats=["red","orange","yellow","green","blue","violet"];
        res.render("cats.ejs",{cats});
});
app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params;
    res.render("subreddit.ejs",req.params);
});
app.get("/random",(req,res)=>{
    let rNum=Math.floor(Math.random()*100)+1;
    res.render("random.ejs",{rNum});
});
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});