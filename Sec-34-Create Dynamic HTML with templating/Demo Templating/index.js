const express=require("express");
const app=express();
const path=require("path");
const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'))
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/random",(req,res)=>{
    let randomnumber1=Math.floor(Math.random()*100)+1;
    res.render("random.ejs",{randomnumber2:randomnumber1});
});
app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params;
    res.render("subreddit.ejs",{subreddit});
})
app.listen(port,()=>{
 console.log(`listening on port ${port}.`);
});