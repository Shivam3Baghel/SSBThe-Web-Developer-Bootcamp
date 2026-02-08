const express=require('express');
const app=express();
const port=3000;
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.send('Hi This is a string send by res object in Demo');
})
app.listen(port,()=>{
    console.log(`listening on port ${port}.`);
});