const express=require("express");
const app=express();
const port=3000;
app.get("/tacos",(req,res)=>{
    res.send("GET /tacos response");//this string is displayed on browser tab
});
app.post("/tacos",(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`OK, here are ur ${qty} ${meat} tacos`);
});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});