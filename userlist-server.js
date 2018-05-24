'use strict';
const express    = require('express');        
const bodyParser = require('body-parser');

const app        = express();                 

const routerUsers = require('./users-router');

const mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds111430.mlab.com:11430/userlist');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8888;    



app.get('/', (req, res) => {
                res.json({ message: 'welcome to our home page!' });   
});

app.use('/api', routerUsers);

app.listen(port, () => {
                console.log('Userlist happens on port ' + port)}
);

