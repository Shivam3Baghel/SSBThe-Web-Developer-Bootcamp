const express=require("express");
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.get("/tacos",(req,res)=>{
    res.send("GET /tacos response");
});
app.post("/tacos",(req,res)=>{
    console.log(req.body);
    res.send("POST /tacos response");
});
app.listen(port,()=>{
    console.log(`listening on port ${port}.`);
});