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