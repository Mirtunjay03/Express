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