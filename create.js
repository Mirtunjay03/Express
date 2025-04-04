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