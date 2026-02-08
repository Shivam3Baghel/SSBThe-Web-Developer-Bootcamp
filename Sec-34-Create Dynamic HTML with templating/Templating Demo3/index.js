const express= require("express");
const app=express();
const path=require("path");
const port=3000;
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    let x=Math.floor(Math.random()*100)+1;
    res.render("home.ejs",{r:x});
});
app.get("/Motivation",(req,res)=>{{
    const names=["Colt Steele","Shivanshu Chaudhary","Shaurya Khanna","Shivam Baghel","Vipul Tyagi","etc."];
    res.render("names.ejs",{names});
}})
app.listen(port,()=>{
    console.log(`listening on port ${port}.`);
});
//If index.js is excecuted from some other place but not cwd
//then we have to specify the directory to the home.ejs 
// like shown above by using requiring path package
