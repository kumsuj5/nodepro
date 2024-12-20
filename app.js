const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://kumsuj5:8953729002@restapi.d5hd8is.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', err => {
    console.log("connection failed mongoose");
});

mongoose.connection.on('connected', () => {
    console.log("connected to mongoose");
});
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/:id', (req,res)=>{
    res.send(`${req.params.id}`)
})

const booksroute = require('./routes/booksroute');
const user = require('./routes/authroute');
const prodcut = require('./routes/productroute');
const categories = require('./routes/Categorieroute');

app.use('/api/v1/book',booksroute);
app.use('/api/v1/user',user);
app.use('/api/v1/prodcut',prodcut);
app.use('/api/v1/categories',categories);



app.listen(PORT,()=>{
    console.log(`server is running on this ports ${PORT}`)
})