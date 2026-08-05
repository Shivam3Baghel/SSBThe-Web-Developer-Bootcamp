const express=require("express");
const app=express();
const port=3001;

app.use(express.urlencoded({extended:true}));//1st middleware
app.use(express.json())//2nd middleware
app.get("/tacos",(req,res)=>{
    res.send("get /tacos response");
});
app.post("/tacos",(req,res)=>{
    const {meat,qty}=req.body;
    console.log("Shivam Singh Baghel");
    console.log(req.body);
    res.send("post /tacos response."+` OK,here are your ${qty} ${meat} tacos`);
    // res.send("2nd post /tacos response");after 1st res.send() request is terminated and 2nd res.send is not excecuted
    console.log("Shivam Singh Baghel");
    console.log(req.body);
});
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});