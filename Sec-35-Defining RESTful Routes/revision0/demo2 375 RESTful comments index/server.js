const express=require("express");
const app=express();
const port=3000;
const path=require("path");
const { stringify } = require("querystring");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

const comments=[
    {
        username:"Todd",
        comment:"lol that is so funny"
    },
    {
        username:"Skylar",
        comment:"I like to go birdwatching with my dog"
    }
    
]

app.get("/tacos",(req,res)=>{
res.send("get /tacos response ssb");
});//get route
app.post("/tacos",(req,res)=>{
    const{meat,qty}=req.body;
res.send(`post /tacos response ssb, OK, here are your ${qty} ${meat}.`);
});//post route
app.listen(port,()=>{
    console.log(`server started on port ${port}.`);});