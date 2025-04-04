const express = require('express');
//const adi = require('./data'); // Importing the JSON data
const adi = require('./mithun'); // Importing the JSON data
const path = require('path'); // Importing the path module
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('This is My home page');
// });

// app.get('/home', (req, res) => {
//     //res.send('This is My about page');
//     //res.json(adi);
//     res.sendFile(path.join(__dirname, 'home.html')); 
// });

// app.get('/about', (req, res) => {
//     //res.send('This is My about page');
//     //res.json(adi);
//     res.sendFile(path.join(__dirname, 'about.html')); 
// });

// app.get('/contact', (req, res) => {
//     //res.send('This is My about page');
//     //res.json(adi);

//     res.sendFile(path.join(__dirname, 'contact.html'));
 
// });
app.use(express.json()); // Middleware to parse JSON request body
app.post('/api/abes', (req, res) => {
    console.log("body",req.body); // Logging the request body to the console
    res.json({}); // Sending JSON data as a response
});

app.listen(port,() =>{
    console.log(`app is run at: ${port}`)
});