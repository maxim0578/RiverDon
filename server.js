const express = require('express');
const mongoose = require('mongoose')

const users = require('../server/routes/api/users.js')
const profile = require('../server/routes/api/profile.js')

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db,  { useNewUrlParser: true })
        .then(()=>console.log('MongoDN Connected'))
        .catch(err=>console.log(err));

app.get('/',(req,res)=>{
    res.send('Hello world');
})

//Use Routes
app.use('/api/users',users);
app.use('/api/profile',profile);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server running on port ${port}`));