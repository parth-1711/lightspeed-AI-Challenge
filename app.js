const express=require('express');
// const bodyParser=require('body-parser');

const app=express();

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());

app.get('/sayHello',(req,res)=>{
    res.json({message:"Hello User  ."})
})

app.listen(80,()=>{
    console.log('Server is up aand running on port 80 !');
})