const express = require('express');
const app = express();
const port = 3000;
// user middleware
const mithun = (req,res,next)=>{
    const age = req.query.age;
    if(!age)
        {
            res.send("please enter your age")
        
        }
        if(age<=18){
            res.send("tum abhi bacche ho")
        }
        next();
}     
app.get('/',(req,res)=>{
    res.send("This is my home page")
})

app.get('/about',mithun,(req,res)=>{
    res.send("Access granted to about page")
})



app.listen(port,() =>{
    console.log(`app is run at: ${port}`)
})