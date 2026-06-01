const express=require("express");
const app=express();
const port=3000;
const path=require("path"); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
    //res.send("Hi.");
});
app.get("/random",(req,res)=>{
    let randomNumber1=Math.floor(Math.random()*100+1);
    let num=5;
    let num0=111;
    res.render("random.ejs",{randomNumber2:randomNumber1,num:num,num0})
    //there can be a second parameter object which sends some keys to ejs with some values
})
app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params;
    res.render("subreddit.ejs",{subreddit});
})
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});