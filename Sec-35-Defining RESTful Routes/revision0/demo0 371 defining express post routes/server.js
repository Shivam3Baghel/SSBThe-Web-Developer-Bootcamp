const express=require("express");
const app=express();
const port=3000;
app.get("/tacos",(req,res)=>{
res.send("get /tacos response ssb");
});//get route
app.post("/tacos",(req,res)=>{
res.send("post /tacos response ssb");
});//post route
app.listen(port,()=>{
    console.log(`server started on port ${port}.`);
});