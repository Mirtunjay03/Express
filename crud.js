const express = require('express');
const app = express();
const port = 3000;

const database=[{id : 1, name:"mithun", age:"21"},
    {id : 2, name:"mirtunjay", age:"22"}
]

app.use(express.json()); // Middleware to parse JSON request body

//CREATE(C)

app.post('/users',(req,res) =>{
    const newuser={
        id:database.length + 1,
        name:req.body.name,
        age:req.body.age
    };
    database.push(newuser);
    res.status(201).json(newuser);
})

//READ(R)

app.get('/users',(req,res) =>{
    res.json(database);
})
//READ(R) one user

app.get('/users/:id',(req,res) =>{
    const userid=parseInt(req.params.id);
    const user=database.find(u =>u.id===userid);
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message:"User not found"});
    }
})

//UPDATE(U)
app.put('/users/:id',(req,res) =>{
    const userid=parseInt(req.params.id);
    const userindex=database.findIndex(u=>u.id===userid);
    if(userindex !== -1){
        database[userindex]={...database[userindex], ...req.body};
        res.json(database[userindex]);
    }
    else{
        res.status(404).json({message:"User not found"});
    }
})

//DELETE(D)
app.delete('/users/:id',(req,res) =>{
    const userid=parseInt(req.params.id);
    const userindex=database.findIndex(u=>u.id===userid);
    if(userindex !== -1){
        const deleteuser=database.splice(userindex,1);
        res.json(deleteuser);
    }
    else{
        res.status(404).json({message:"User not found"});
    }
})

app.listen(port, () => {
    console.log(`app is run at: ${port}`)
}); 