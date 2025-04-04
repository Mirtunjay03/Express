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