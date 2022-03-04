const express = require('express');
const app = express();
const db = require("./db");
const Pizzas = require('./models/pizzaModel');
const port = process.env.PORT || 5000;

const pizzasRoute = require('./routes/pizzasRoute');
const userRoute   = require('./routes/userRoute');

app.use(express.json());
//We call /api/pizzas/getallpizzas from pizzaAction
//so call will come on server.js page and it will check the url 
//if url is /api/pizzas....it will route it to pizzaRouter ans there api call will be made to server(basically mongodb)
app.use('/api/pizzas/',pizzasRoute);
app.use('/api/users/',userRoute);
app.get('/',(req,res)=>{
    res.send(`Server is Running on ${port}`);
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}
app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
});