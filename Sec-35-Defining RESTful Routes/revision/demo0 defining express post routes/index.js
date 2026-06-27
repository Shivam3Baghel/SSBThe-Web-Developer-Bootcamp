const express=require("express");
const app=express();
const port=3001;

app.use(express.urlencoded({extended:true}));

app.get("/tacos",(req,res)=>{
    res.send("get /tacos response");
});
app.post("/tacos",(req,res)=>{
    console.log(req.body);//undefined
    res.send("post /tacos response");
});
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});