const express=require('express');
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
app.use((req,res)=>{
    console.log('we got a new request,');
    res.send('we got ur request, this is a response');
});
app.get('/cats',(req,res)=>{
    res.send('MEOW');
});
app.get('/dogs',(req,res)=>{
    res.send('WOOF');
});
app.get('/',(req,res)=>{
    res.send('this is home page');
});
app.post('/cats',(req,res)=>{
    res.send('using post routing to cats')
});
app.get('/:p',(req,res)=>{
res.send('I dont know that path')});
// /cats=>'meow'
// /dogs=>'woof'
// /=>directs to the page as defined or can be a home page